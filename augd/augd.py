from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
import argparse




parser = argparse.ArgumentParser(
    prog='augd',
    description='Automatic Upload to One Drive',
    argument_default=help,
    add_help=True
)

parser.add_argument('command',
    action='store',
    nargs=2,
    default=None,
    choices=["dic", "list", "rm", "add", "upload"],
    help="Dictionary( list to list, add to add, rm to remove, upload to upload)"
)

parser.add_argument('--inp', type=str, required=False, help="Input data if needed for file")


args = parser.parse_args()

if(args.command[0] == "dic"):
    if(args.command[1] == "upload"):
        print(args.inp)
        gauth = GoogleAuth()           
        drive = GoogleDrive(gauth) 
        f = open("diclist.txt", "r")
        upload_file_list = f.read().split(",")
        
        for upload_file in upload_file_list:
            gfile = drive.CreateFile({'title': upload_file})
            # Read file and set it as the content of this instance.
            gfile.SetContentFile(upload_file)
            gfile.Upload() # Upload the file. 
            gfile = None
    elif(args.command[1] == "list"):
        f = open("diclist.txt", "r")
        list = f.read().split(",")

        for x in list:
            print(x)
    elif(args.command[1] == "add"):
        f = open("diclist.txt", "r")
        fread = f.read()
        if(fread == ""):
            f.close()
            f = open("diclist.txt", "a")
            f.write("{0}".format(args.inp))
            f.close()
        else:
            f.close()
            f = open("diclist.txt", "a")
            f.write(",{0}".format(args.inp))
            f.close()
    elif(args.command[1] == "rm"):
        filer = args.inp
        f = open("diclist.txt", "r")
        fread = f.read()
        freadfind = fread.find(args.inp)
        if(freadfind == -1):
            print("File not found!")
        elif(freadfind == 0):
            newN = fread
            f.close()
            newN = newN[newN.find(filer) + len(filer) + 1:] 
            f = open("diclist.txt", "w")
            f.write(newN)
            f.close()
        else:
            newN = fread
            f.close()
            newN = newN[: newN.find(args.inp) - 1] + newN[newN.find(args.inp) + len(args.inp):] 
            f = open("diclist.txt", "w")
            f.write(newN)
            f.close()