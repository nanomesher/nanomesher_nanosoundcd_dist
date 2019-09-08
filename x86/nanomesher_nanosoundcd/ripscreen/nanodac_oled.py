#!/usr/bin/env python
from __future__ import unicode_literals

from oled.render import canvas
from oled.device import ssd1306, sh1106
from subprocess import *

import socket

import time
import datetime
import os
import  RPi.GPIO as GPIO
import json
import urllib2
from PIL import ImageFont
from subprocess import check_output
time.sleep(1)
#serial = i2c(port=1, address=0x3C)

hasOLED=True

try:
	display="1"
	with open('/data/configuration/miscellanea/nanosound/config.json') as f:
    	  data = json.load(f)
          display=data['oledDisplay']['value']
except:
	display="1"

#device = ssd1306(serial, rotate=0)
try:
	if(display=="2"):
		device = ssd1306(port=1, address=0x3C)
	else:
		device = sh1106(port=1, address=0x3C)

	hasOLED = True
except:
	hasOLED = False
	

def GetLANIP():
   cmd = "ip addr show eth0 | grep inet  | grep -v inet6 | awk '{print $2}' | cut -d '/' -f 1"
   p = Popen(cmd, shell=True, stdout=PIPE)
   output = p.communicate()[0]
   return output[:-1]

def GetWLANIP():
   cmd = "ip addr show wlan0 | grep inet  | grep -v inet6 | awk '{print $2}' | cut -d '/' -f 1"
   p = Popen(cmd, shell=True, stdout=PIPE)
   output = p.communicate()[0]
   return output[:-1]


def make_font(name, size):
    font_path = os.path.abspath(os.path.join(
        os.path.dirname(__file__), 'fonts', name))
    return ImageFont.truetype(font_path, size)




showip=False;
ampon=False;

def toggleAmp(value):
    global ampon
    if(ampon==True):
	GPIO.output(27,GPIO.LOW)
	ampon=False
    elif(ampon==False):
	GPIO.output(27,GPIO.HIGH)
	ampon=True

def toggleShowIP():
    global showip
    if(showip==False):
	showip=True
    elif(showip==True):
	showip=False

font1 = make_font("code2000.ttf",12)
awesomefont = make_font("fontawesome-webfont.ttf",12)
menumode = "playing"  #or menu

def startRip():
    showScreen("Fetching CD Info"," ","Please wait..."," ",1)
    cdmeta = json.load(urllib2.urlopen('http://127.0.0.1:5002/cdmeta2'))
    print(cdmeta)
    showScreen("Start Extracting:",cdmeta[0]["album_name"],cdmeta[0]["artist_name"],"16bit 44.1khz",3)

def showScreen(line1,line2,line3,line4,show_for_sec):

    with canvas(device) as draw:
        draw.rectangle((0, 0, device.width-1, device.height-1), outline="white", fill="black")
        draw.text((5, 2), "\uf192" ,font=awesomefont, fill="white")
        draw.text((18, 2), line1,font=font1, fill="white")
        w1, h1 = draw.textsize(text=line2,font=font1)
        w2,h2 = draw.textsize(text=line3,font=font1)
        w3,h2 = draw.textsize(text=line4,font=font1)
        left1 = (device.width - w1) / 2
        left2 = (device.width - w2) / 2
        left3 = (device.width - w3) / 2
        draw.text((left1, 18), line2,font=font1, fill="white")
        draw.text((left2, 36), line3,font=font1, fill="white")
        draw.text((left3, 50), line4,font=font1, fill="white")
        #draw.text((left, 18), artist,font=font1, fill="white")
        #draw.text((5,36), " Yes - Jason Mraz", font=font1,fill="white")
        #if(ampon):
        #    draw.text((device.width - 17,36), headphone, font=awesomefont,fill="white")
        #else:
        #    draw.text((device.width - 17,36), " ", font=awesomefont,fill="white")
        #draw.text((left2, 36), bitrate, fill="white")
        #draw.text((10, 50), elapsed, fill="white")
        #draw.text((60, 50), repeat, font=awesomefont, fill="white")
        #draw.text((75, 50), random, font=awesomefont, fill="white")
        #draw.text((92, 50), text="\uf028", font=awesomefont,fill="white")
        #draw.text((105, 50), volume, fill="white")
    time.sleep(show_for_sec)

def showMenu():
    with canvas(device) as draw:
        draw.text((2, 1), "> Extract CD",font=font1, fill="white")
        draw.text((2, 17), " Show IP Address",font=font1, fill="white")
        draw.text((2, 34), " Toggle Amp",font=font1, fill="white")
        draw.text((2, 51), "",font=font1, fill="white")
        #draw.text((left, 18), artist,font=font1, fill="white")
        #draw.text((5,36), " Yes - Jason Mraz", font=font1,fill="white")
        #if(ampon):
        #    draw.text((device.width - 17,36), headphone, font=awesomefont,fill="white")
        #else:
        #    draw.text((device.width - 17,36), " ", font=awesomefont,fill="white")
        #draw.text((left2, 36), bitrate, fill="white")
        #draw.text((10, 50), elapsed, fill="white")
        #draw.text((60, 50), repeat, font=awesomefont, fill="white")
        #draw.text((75, 50), random, font=awesomefont, fill="white")
        #draw.text((92, 50), text="\uf028", font=awesomefont,fill="white")
        #draw.text((105, 50), volume, fill="white")


def showRipScreen():
    with canvas(device) as draw:
        draw.rectangle((0, 0, device.width-1, device.height-1), outline="white", fill="black")
        draw.text((5, 18), "Extracting..",font=font1, fill="white")
        w3, h3 = draw.textsize(text="\uf177", font=awesomefont)
        w, h = draw.textsize(text=artist,font=font1)
        w2,h2 = draw.textsize(text=bitrate)
        left = (device.width - w) / 2
        left2 = (device.width - w2) / 2
        #draw.text((left, 18), artist,font=font1, fill="white")
        draw.text((5,36), " Yes - Jason Mraz", font=font1,fill="white")
        #if(ampon):
        #    draw.text((device.width - 17,36), headphone, font=awesomefont,fill="white")
        #else:
        #    draw.text((device.width - 17,36), " ", font=awesomefont,fill="white")
        #draw.text((left2, 36), bitrate, fill="white")
        #draw.text((10, 50), elapsed, fill="white")
        #draw.text((60, 50), repeat, font=awesomefont, fill="white")
        #draw.text((75, 50), random, font=awesomefont, fill="white")
        #draw.text((92, 50), text="\uf028", font=awesomefont,fill="white")
        #draw.text((105, 50), volume, fill="white")
    time.sleep(5)

def optionButPress(value):
    global startt,endt
    if GPIO.input(16) == 1:
        startt = time.time()
    if GPIO.input(16) == 0:
        endt = time.time()
        elapsed = endt - startt
        if(elapsed)<1:
		toggleAmp(1)
	else:
		showRipScreen()

def get_pid(name):
    return check_output(["pidof",name])



webradio="\uf1be"
musicfile="\uf1c7"
headphone="\uf001"

check=0;

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(27,GPIO.OUT)
GPIO.setup(16, GPIO.IN,pull_up_down=GPIO.PUD_DOWN)
#GPIO.add_event_detect(16, GPIO.BOTH, callback=optionButPress, bouncetime=200)

spotConRunning = False
spotConActive = False
spotConProcessRunning = False
nanosoundcdRunning = True

#Switch ampon
toggleAmp(1)

while(not hasOLED):
   time.sleep(0.1)

   
try:
   if(hasOLED):
      with canvas(device) as draw:
         draw.text((5, 2), "NanoSound v1.5.2",font=font1, fill="white")
         draw.text((1, 18), GetLANIP(),font=font1, fill="white")
         draw.text((1, 36), GetWLANIP(),font=font1, fill="white")

   time.sleep(3)
except:
   pass
   
   
#only fetch when is 0
fetch=0
refresh=False

lastupdate = datetime.datetime.now()

while(hasOLED):
   
  

   try:
    pid = get_pid("spotify-connect-web")
    spotConProcessRunning = True
   except:
	spotConProcessRunning = False

   try:
    pid = get_pid("spotify-connect-web")
    spotConProcessRunning = True
   except:
	spotConProcessRunning = False
	
   try:        	
	for x in range(100,-10,-3):

            if GPIO.input(16) == 1:
                #showRipScreen()
                #showScreen("Jason Mraz","Yes","16bit 44.1khz")
                showMenu()
                time.sleep(1.5)
                startRip()

            if(fetch==0):
                refresh=True
            else:
                refresh=False


            if(spotConProcessRunning and refresh):
				try:
					
						status = json.load(urllib2.urlopen('http://127.0.0.1:4000/api/info/status'))
						#print(status)

						if(status["logged_in"]):
								spotConRunning = True
						else:
								spotConRunning = False

						if(status["playing"] and status["active"]):
								spotConActive = True
						else:
								spotConActive = False

				except Exception as inst:
						spotConProcessRunning = False
						spotConRunning = False
						spotConActive = False


			#print(datetime.datetime.now()-lastupdate)

            if(not refresh and state=="play" and not elapsec==0 and ((datetime.datetime.now()-lastupdate).total_seconds()>1)):
				lastupdate = datetime.datetime.now()
				elapsec = elapsec+1
				elapsed = str(datetime.timedelta(seconds=elapsec))

            if(refresh):

				volstatus = json.load(urllib2.urlopen('http://127.0.0.1:3000/api/v1/getstate'))
				
				if('repeat' in volstatus):
					if(volstatus['repeat']):
						repeat = '\uf01e'
					else:
						repeat = ' '
				else:
					repeat = ' '
					
				if('random' in volstatus):
					if(volstatus['random']):
						random = '\uf074'
					else:
						random = ' '
				else:
					random = ' '					
					
								
					
				if('title' in volstatus):
					title = volstatus['title']
				else:
					if('uri' in volstatus):
						title = volstatus['uri'].split('/')[-1:][0]
					else:
						title = ' '
						
				if(title is None):
					title = ' '	

				if('artist' in volstatus):
					artist = volstatus['artist']
				else:
					artist=' '

				if(artist is None):
					artist = ' '

					
				if('trackType' in volstatus):
					trackType = volstatus['trackType']
					if (trackType == "webradio"):
						filetype=webradio
					elif (trackType == "spotify"):
						filetype = '\uf1bc'
					else:
						filetype=musicfile
				else:
					filetype=' '

				if(('samplerate' in volstatus) and ('bitdepth' in volstatus)):
					if(str(volstatus['samplerate']) == "Volspotconnect2"):
						bitrate = str(volstatus['bitdepth']) 
					else:
						bitrate = str(volstatus['samplerate']) + " " + str(volstatus['bitdepth']) 
				else:
					bitrate = ' '


				if('seek' in volstatus):
					#elapsed = time.strftime('%H:%M:%S', time.gmtime(float(volstatus['seek'])))
					
					elapsec = round(float(volstatus['seek'])/1000)
					elapsed = str(datetime.timedelta(seconds=elapsec))
					
				else:
					elapsed = ' '
				volume = str(volstatus['volume'])

				if('status' in volstatus):
					state = volstatus['status']
				else:
					state = 'pause'

				if (state=="pause" or state=="stop") and spotConRunning and (not spotConActive):
						title = "Spotify Connect Ready"
						artist = socket.gethostname()
						check = 3		
						filetype = '\uf1bc'
						bitrate = ' '
						elapsed = ' '
				if spotConRunning and spotConActive:
						spotconmeta = json.load(urllib2.urlopen('http://127.0.0.1:4000/api/info/metadata'))
						title = spotconmeta["track_name"]
						artist = spotconmeta["artist_name"]
						check = 3
						filetype = '\uf1bc'
						bitrate = ' '
						elapsed = ' '

				if(nanosoundcdRunning and refresh):
					cdstatus = json.load(urllib2.urlopen('http://127.0.0.1:5002/progress'))
					if(cdstatus['playing'] <> {}):
						title = cdstatus['playing']['track_name']
						artist = cdstatus['playing']['artist_name']
						elapsec = cdstatus['playing']['playprogress']
						elapsed = str(datetime.timedelta(seconds=cdstatus['playing']['playprogress']))
						filetype = "\uf192"
						bitrate = "16bit 176.4khz"
						if(cdstatus['playing']['status']=="State.Playing"):
							state = 'play'
						if(cdstatus['playing']['status']=="State.Paused"):
							state = 'pause'
					else:
						state = 'stop'


            fetch=fetch+1

            if(fetch==4):
				fetch=0

            if(showip):
				artist = GetLANIP()
				title = GetWLANIP()

            with canvas(device) as draw:
				draw.rectangle((0, 0, device.width-1, device.height-1), outline="white", fill="black")
				draw.text((x, 2), title,font=font1, fill="white")
				w3, h3 = draw.textsize(text="\uf177", font=awesomefont)			
				w, h = draw.textsize(text=artist,font=font1)
				w2,h2 = draw.textsize(text=bitrate)
				left = (device.width - w) / 2
				left2 = (device.width - w2) / 2
				draw.text((left, 18), artist,font=font1, fill="white")
				draw.text((5,36), filetype, font=awesomefont,fill="white")
				if(ampon):
					draw.text((device.width - 17,36), headphone, font=awesomefont,fill="white")
				else:
					draw.text((device.width - 17,36), " ", font=awesomefont,fill="white")
				draw.text((left2, 36), bitrate, fill="white")
				draw.text((10, 50), elapsed, fill="white")
				draw.text((60, 50), repeat, font=awesomefont, fill="white")
				draw.text((75, 50), random, font=awesomefont, fill="white")
				draw.text((92, 50), text="\uf028", font=awesomefont,fill="white")
				draw.text((105, 50), volume, fill="white")
				time.sleep(0.35)
   finally:		
		time.sleep(0.35)	

