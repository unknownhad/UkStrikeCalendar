# UkStrikeCalendar
Creates a Calendar and display strike in the calendar

This project is created using chatGPT and hosted over Cloudflare workers.

This project is hosted over :  

https://ukstrikecalendar.himanshuanand.com/
https://ukstrikecalendar.himanshuanand.workers.dev/

The project does not use any database or any kind of configuration; it is purely hosted on Cloudflare Workers (Free tier serverless) which means absolutely no management. (\m/)

#How to self Host 
1) Get a free tier account on Cloudflare 
2) On the left side panel, navigate to - 'Workers Routes'
3) Manage Workers -> 'Create a Service'
<img width="1363" alt="Screenshot 2022-12-28 at 13 32 06" src="https://user-images.githubusercontent.com/441098/209820039-882fb163-8f2f-44e6-95ad-837ce1eed5b4.png">
<img width="703" alt="Screenshot 2022-12-28 at 13 34 44" src="https://user-images.githubusercontent.com/441098/209820419-94b084c2-c1e7-428d-aeca-6f9c51531160.png">
4) Give a service name and select HTTP handler and 'Create service'
<img width="847" alt="Screenshot 2022-12-28 at 13 34 54" src="https://user-images.githubusercontent.com/441098/209820430-c5b82d4c-fc00-4258-bc46-6cc891138aef.png">
5) once the service is created, go to 'Quick Edit'
<img width="1090" alt="Screenshot 2022-12-28 at 13 37 01" src="https://user-images.githubusercontent.com/441098/209820668-ec9e330b-67de-4d12-8170-06ea9e8362dc.png">
6) On left-hand side you will see a panel like this
<img width="576" alt="Screenshot 2022-12-28 at 13 37 11" src="https://user-images.githubusercontent.com/441098/209820680-f332d83a-2cb5-4a02-9602-cf33324f3fff.png">
7) Paste the code in there
https://github.com/unknownhad/UkStrikeCalendar/blob/main/main.js
8) The preview can be seen on the right side of the same panel
9) Want to expose this on custom domains?
10) Add A type DNS entry
<img width="1062" alt="Screenshot 2022-12-28 at 13 42 53" src="https://user-images.githubusercontent.com/441098/209821279-f4cc63bb-aaf8-46dd-af7a-cdae7c1af265.png">

Feel free to re purpose it as per your need and requirements.

If I missed some strikes, feel free to E-mail it to me or raise a PR, will update it.

