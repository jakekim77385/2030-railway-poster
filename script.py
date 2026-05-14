import codecs

with codecs.open('public/index.html', 'r', 'utf-8') as f:
    lines = f.readlines()

with codecs.open('new_diagram.html', 'r', 'utf-8') as f:
    new_html = f.read()

# Lines 262 to 410 inclusive is indices 261 to 410
lines[261:410] = [new_html + '\n']

with codecs.open('public/index.html', 'w', 'utf-8') as f:
    f.writelines(lines)
