import zipfile
import codecs
with zipfile.ZipFile('Backup_20260513.zip', 'r') as z:
    # Check if public/index.html exists
    if 'public/index.html' in z.namelist():
        with z.open('public/index.html') as f:
            content = f.read().decode('utf-8')
        with codecs.open('public/index.html', 'w', 'utf-8') as out:
            out.write(content)
        print('Restored public/index.html from zip as UTF-8')
    else:
        print('public/index.html not found in zip')
