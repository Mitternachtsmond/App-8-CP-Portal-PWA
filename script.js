let montharr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const changeDate =(date)=>
{
    let day=date.getDate();
    let month=date.getMonth();
    month=montharr[month];
    let year=date.getFullYear();
    let hours=date.getHours();
    if(hours<=9)
    {
        hours=`0${hours}`;
    }
    let minutes=date.getMinutes();
    if(minutes<=9)
    {
        minutes=`0${minutes}`;
    }
    let insertDate=`${month} ${day} ${year}, ${hours}:${minutes}`;
    return insertDate;
    
};

const getDuration=(duration)=>
{
    let daydiv=24*60*60;
    let day=Math.round(duration/daydiv);
    duration=duration%daydiv;
    daydiv=60*60;
    let hours=Math.round(duration/daydiv);
    duration=duration%daydiv;
    daydiv=60;
    let minutes=Math.round(duration/daydiv);
    duration=duration%daydiv;
    let finalDuration="";
    if(day>0)
    {
        finalDuration=day+" day ";
    }
    if(hours>0)
    {
        finalDuration=finalDuration+hours+" hours ";
    }
    if(minutes>0)
    {
        finalDuration=finalDuration+minutes+" minutes ";
    }
    return finalDuration;
    
};
const getHTMLtoAdd=(img,name,insertDate,insertDuration,insertLink)=>
{
    let htmlToAdd=
        `<div class="leftSubContent">
            <div class="platformIcon">
                <img class="platformIconImg" src=${img} alt="codeforces Icon">
            </div>
            <div class="contestInfo">
                <div class="contestName">
                    ${name}
                </div>
                <div class="contestStartTime">
                    Start: ${insertDate}
                </div>
                <div class="contestEndTime">
                    Duration: ${insertDuration}
                </div>
            </div>
            <div class="contestLink">
                <a href=${insertLink}>
                    <img src="images/contestLink.png" alt="link to contest" id="contestLinkImage">
                </a>
            </div>
        </div>`;
        return htmlToAdd;
};
const fetchFromCFUrl =(url)=>
{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>
    {
        let workData=data.result;
        for(var i=0;i<workData.length;i++)
        {
            if(workData[i].phase=="BEFORE"){
            let leftContent = document.querySelector(".leftContent");
            let element=workData[i];
            let date=new Date(element.startTimeSeconds*1000);
            let insertDate=changeDate(date);
            let insertDuration=getDuration(element.durationSeconds);
            let img="images/codeforcesIcon.png";
            let insertLink="https://codeforces.com/contests";
            let htmlToAdd=getHTMLtoAdd(img,element.name,insertDate,insertDuration,insertLink);
            leftContent.insertAdjacentHTML("afterbegin",htmlToAdd);
            }
            else
            break;
        }
    })
    .catch((error)=>
    {
        console.log("error found");
    }
    );
};

const fetchFromCCUrl =(url)=>
{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>
    {
        let workData=data;
        for(var i=0;i<workData.length;i++)
        {
            if(workData[i].status=="BEFORE"){
            let leftContent = document.querySelector(".leftContent");
            let element=workData[i];
            let date=new Date(element.start_time);
            let insertDate=changeDate(date);
            let insertDuration=getDuration(element.duration);

            let img="images/codechefIcon2.png";
            let insertLink=element.url;
            let htmlToAdd=getHTMLtoAdd(img,element.name,insertDate,insertDuration,insertLink);
            leftContent.insertAdjacentHTML("afterbegin",htmlToAdd);
            }
            else
            break;
        }
    })
    .catch((error)=>
    {
        console.log("error found");
    }
    );
};

const fetchFromLCUrl =(url)=>
{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>
    {
        let workData=data;
        for(var i=0;i<workData.length;i++)
        {
            if(workData[i].status=="BEFORE"){
            let leftContent = document.querySelector(".leftContent");
            let element=workData[i];
            let date=new Date(element.start_time);
            let insertDate=changeDate(date);
            let insertDuration=getDuration(element.duration);
            let img="images/leetcodeIcon.png";
            let insertLink=element.url;
            let htmlToAdd=getHTMLtoAdd(img,element.name,insertDate,insertDuration,insertLink);
            leftContent.insertAdjacentHTML("afterbegin",htmlToAdd);
            }
            else
            break;
        }
    })
    .catch((error)=>
    {
        console.log("error found");
    }
    );
};


const fetchDetails=()=>
{
    fetchFromCFUrl("https://codeforces.com/api/contest.list?gym=false");
    fetchFromCCUrl("https://kontests.net/api/v1/code_chef");
    fetchFromLCUrl("https://kontests.net/api/v1/leet_code");
}

let body=document.querySelector("body");
body.addEventListener("load",fetchDetails());
