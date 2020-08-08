
cd nanomesher_nanosoundcd
rmdir .idea /S /Q
rmdir pat /S /Q
rmdir ripscreen /S /Q
rmdir build /S /Q
del *.py /Q
del *.pyc /Q
del make.sh /Q

cd ..
7z.exe -ttar a dummy .\nanomesher_nanosoundcd -so | 7z.exe -si -tgzip a nanomesher_nanosoundcd_x86.tar.gz
xcopy nanomesher_nanosoundcd_x86.tar.gz ..\packages /Y
del nanomesher_nanosoundcd_x86-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz
ren nanomesher_nanosoundcd_x86.tar.gz nanomesher_nanosoundcd_x86-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz
move /Y nanomesher_nanosoundcd_x86-%date:~-4,4%%date:~-7,2%%date:~-10,2%.tar.gz ..\packages

