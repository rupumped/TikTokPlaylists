NOTE: This repository is deprecated in favor of TikTok's new [collections](https://www.makeuseof.com/how-to-create-tiktok-collections/) feature. I have unpublished the GitHub Pages site.

# TikTokPlaylists
Create playlists from your liked videos on TikTok. Example: https://tinyurl.com/djs59xau

## Creating a playlist
Before you begin, you need to install the TikTok API:
```
$ pip install TikTokApi
$ python -m playwright install
```
Also, your list of liked videos on TikTok must be public. 

Run `main.py` in Python. If you use Linux, open the Terminal and type:
```
$ python main.py rupumped
```
where `rupumped` is replaced by your TikTok username.

The script will open your web browser to the first liked video on your list of liked videos on TikTok. Type `N` into the Terminal and press enter to create a new playlist. Next, name your playlist by typing the name you want into the Terminal and pressing enter. The process will repeat for each of your liked videos. If you would like to add a video to a list you have already started, just enter the number next to that playlist's name in the menu. For example, your menu might look like
```
[0] My first playlist
[1] Musictok
[2] Cute Animals
[3] TIL
[4] Lifehacks
[5] Videos to Share with my Partner
[N] New Playlist
[X] Exit
```

When you are done, type `X` at the menu to exit, and the script will print out URLs for the playlists you created.

## Viewing a Playlist
You can view one of your playlists by visiting its URL. Navigate forward and backward through the playlist by clicking the `<` and `>` buttons below the video.
