*** for make package folder which contain exe file and resources
electron-packager . 'Yash Khatri WYNK'

*** make asar file which is like as a zip file of (^)
asar pack 'Yash Khatri WYNK-win32-x64' 'YashKhatriWYNK.asar'

*** we can extract this asar file using this commad
asar extract YashKhatriWYNK.asar YashKhatriWYNK

*** make windows installer file 
electron-installer-windows --src YashKhatriWYNK/ --dest YashKhatriWYNK/Wynk