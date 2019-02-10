rmdir ..\nanomesher_nanosoundcd_dist\nanomesher_nanosoundcd /S /Q
mkdir ..\nanomesher_nanosoundcd_dist\nanomesher_nanosoundcd
xcopy *.* ..\nanomesher_nanosoundcd_dist\nanomesher_nanosoundcd /S
cd ..\nanomesher_nanosoundcd_dist\nanomesher_nanosoundcd
rmdir .idea /S /Q
rmdir pat /S /Q
rmdir ripscreen /S /Q
del *.py /Q
del *.pyc /Q
del make.sh /Q

cd ..
7z.exe -ttar a dummy .\nanomesher_nanosoundcd -so | 7z.exe -si -tgzip a nanomesher_nanosoundcd.tar.gz

del nanomesher_nanosoundcd-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz
ren nanomesher_nanosoundcd.tar.gz nanomesher_nanosoundcd-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz
move /Y nanomesher_nanosoundcd-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz ./packages

7z.exe -ttar a dummy .\nanomesher_nanosoundcd\service\*.service -so | 7z.exe -si -tgzip a nanomesher_nanosoundcd_services.tar.gz
ren nanomesher_nanosoundcd_services.tar.gz nanomesher_nanosoundcd_services-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz
move /Y nanomesher_nanosoundcd_services-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz ./packages
