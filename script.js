async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/series?apikey=66e121dc-8ebe-4e95-8ae7-74dc4eb034fa&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.id == "a5f5095a-72ed-455e-969f-30283ed18305").map(match => `${match.startDate}, ${match.endDate}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();