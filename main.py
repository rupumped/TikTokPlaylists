from TikTokApi import TikTokApi
from TikTokApi.tiktok import BASE_URL
import webbrowser, os, re

def compress(num):
    return num
    # conversion_table = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    # decimal = int(num)
    # hexadecimal = ''

    # while(decimal>0):
    #     remainder = decimal%len(conversion_table)
    #     hexadecimal = conversion_table[remainder]+ hexadecimal
    #     decimal = decimal//len(conversion_table)
        
    # return hexadecimal

api = TikTokApi()

username = 'rupumped'
n_videos = 1000
liked_videos = api.userLikedbyUsername(username, count=n_videos)
liked_videos.reverse()

# url = 'file:///home/nick/GitHub/TikTokPlaylists/index.html'
url = 'https://rupumped.github.io/TikTokPlaylists/index.html'
alphanumeric = re.compile(r'[^a-zA-Z0-9 \-]')

pl_names = []
pl_lists = []
first_flag = True
for vid in liked_videos:
    webbrowser.open('https://www.tiktok.com/@{}/video/{}'.format(vid['author']['uniqueId'], vid['id']), new=1 if first_flag else 0)
    first_flag = False

    for i, pl in enumerate(pl_names):
        print('[{}] {}'.format(i, pl))
    print('[N] New Playlist')
    print('[X] Exit')
    inp = input()

    if inp.upper() == 'N':
        print('Name of new playlist: ')
        new_name = input()
        new_name = alphanumeric.sub('', new_name)
        pl_names.append(new_name)
        pl_lists.append([vid['id']])
    elif inp.upper() == 'X':
        for i, pl in enumerate(pl_names):
            print('{}: {}?{}&{}'.format(pl, url, pl, '&'.join(map(compress, pl_lists[i])) ))
        break
    elif inp.isdigit():
        inp = int(inp)
        if inp<len(pl_names):
            pl_lists[inp].append(vid['id'])
        else:
            print("You don't have that many playlists")
            break
    else:
        print('Not an option.')
        break

    os.system('clear')