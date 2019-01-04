# Next-Pic
Check out some animal photos real easy! Just pick a category of animal and click next.

I'm currently hosting this webapp on AWS at this address: http://chrisbezzina.com/ 

I made this little project to keep my daughter entertained using Angular 7 and Angular Material.

For now I am using the free tier of the Unsplash API to get the images, which means that after too many images are downloaded, the webapp will fallback to using a placeholder of my dog. 

The next step for this project is to replace the Unsplash API with my own backend. I'm currently planning to do this using AWS Lambda.



# Build Instructions
To build this app you will need Node and Angular installed on your PC.

You will also need to register with the unsplash api: https://unsplash.com/documentation#creating-a-developer-account, and add the access token to your own secrets.ts file.
