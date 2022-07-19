let montharr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let array=[];
let leftContent = document.querySelector(".leftContent");
let filterDate=document.getElementById("inputDate");
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
    let day=Math.floor(duration/daydiv);
    duration=duration%daydiv;
    daydiv=60*60;
    let hours=Math.floor(duration/daydiv);
    duration=duration%daydiv;
    daydiv=60;
    let minutes=Math.floor(duration/daydiv);
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

let cfCheck=false;
let ccCheck=false;
let lcCheck=false;
const fetchFromCFUrl = async (url)=>
{
    try{
        const res=await fetch(url);
        const data=await res.json();
        cfCheck=true;
        let workData=data.result;
        for(var i=0;i<workData.length;i++)
        {
            if(workData[i].phase=="BEFORE"){
            let element=workData[i];
            let date=new Date(element.startTimeSeconds*1000);
            let times=element.startTimeSeconds*1000;

            let insertDate=changeDate(date);
            let insertDuration=getDuration(element.durationSeconds);
            let img="images/codeforcesIcon.png";
            let insertLink="https://codeforces.com/contests";
            let obj={
                platformName:"codeforces",
                image:img,
                name:element.name,
                date:insertDate,
                duration:insertDuration,
                link:insertLink,
                dur:element.durationSeconds,
                time:times
            };
            array.push(obj);
            }
            else
            break;
        }
    }
    catch
    {
        console.log("error found");
    }
};

const fetchFromCCUrl =async (url)=>
{
    try
    {
        const res=await fetch(url);
        const data=await res.json();
        ccCheck=true;
        let workData=data;
        for(var i=0;i<workData.length;i++)
        {
            if(workData[i].status=="BEFORE"){
            let element=workData[i];
            let date=new Date(element.start_time);
            let times=date.getTime();
            let insertDate=changeDate(date);
            let insertDuration=getDuration(element.duration);
            let numDur=parseInt(element.duration);
            let img="images/codechefIcon2.png";
            let insertLink=element.url;
            let obj={
                platformName:"codechef",
                image:img,
                name:element.name,
                date:insertDate,
                duration:insertDuration,
                link:insertLink,
                dur:numDur,
                time:times
            };
            array.push(obj);
            }
            else
            break;
        }
    }
    catch
    {
        console.log("error found");
    }
};

const fetchFromLCUrl = async (url)=>
{
try{
    const res=await fetch(url);
    const data=await res.json();
        lcCheck=true;
        let workData=data;
        for(var i=0;i<workData.length;i++)
        {
            if(workData[i].status=="BEFORE"){
            let element=workData[i];
            let date=new Date(element.start_time);
            let times=date.getTime();
            let insertDate=changeDate(date);
            let insertDuration=getDuration(element.duration);
            let img="images/leetcodeIcon.png";
            let insertLink=element.url;
            let numDur=parseInt(element.duration);
            let obj={
                platformName:"leetcode",
                image:img,
                name:element.name,
                date:insertDate,
                duration:insertDuration,
                link:insertLink,
                dur:numDur,
                time:times
            };
            array.push(obj);
            }
            else
            break;
        }
    }
catch{
    console.log("error found");
}
}

const fetchDetails=async ()=>
{
    await fetchFromCFUrl("https://codeforces.com/api/contest.list?gym=false");
    await fetchFromCCUrl("https://kontests.net/api/v1/code_chef");
    await fetchFromLCUrl("https://kontests.net/api/v1/leet_code");
}

const printArray=async ()=>
{
    let lastchild=leftContent.lastElementChild;
    while(lastchild)
    {
        leftContent.removeChild(lastchild);
        lastchild=leftContent.lastElementChild;
    }
    let cfState,ccState,lcState;
    cfState=document.getElementById("codeforcesCB").checked;
    ccState=document.getElementById("codechefCB").checked;
    lcState=document.getElementById("leetcodeCB").checked;
    let timesort=document.getElementById("timeSort").checked;
    if(timesort){
    array.sort(function (a,b){
        return (a.time - b.time);
    });
    }
    else
    {
        array.sort(function (a,b){
            return (a.dur - b.dur);
        });
    }

    // console.log(cfState);
    // console.log(ccState);
    // console.log(lcState);
    for(let i=0;i<array.length;i++)
    {
        // console.log(array[i].name);
        let element=array[i];
        if((cfState && element.platformName=="codeforces") || (ccState && element.platformName=="codechef") || (lcState && element.platformName=="leetcode"))
        {
            console.log("here");
            let htmlToAdd=getHTMLtoAdd(element.image,element.name,element.date,element.duration,element.link);
            leftContent.insertAdjacentHTML("beforeend",htmlToAdd);
        }
    };
}

async function start(){
    await fetchDetails();
    await printArray();
    let doneButton=document.querySelector(".doneFilterButton");
    doneButton.addEventListener("click",await printArray);
    let doneSortButton=document.querySelector(".doneSortButton");
    doneSortButton.addEventListener("click",await printArray);
}
start();

setTimeout(()=>{
if(ccCheck==false && cfCheck==false && lcCheck==false){
    alert("Check your internet connection");
}
},10000);
