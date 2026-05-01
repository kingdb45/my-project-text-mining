const players = [
{ name:"Sachin Tendulkar", runs:34357, avg:45.16, sr:67, wickets:201 },
{ name:"Virat Kohli", runs:"25000+", avg:48, sr:90, wickets:4 },
{ name:"Ricky Ponting", runs:27483, avg:42.03, sr:80, wickets:8 },
{ name:"Kumar Sangakkara", runs:28016, avg:42.35, sr:78, wickets:0 },
{ name:"Brian Lara", runs:22358, avg:43.26, sr:79, wickets:4 },
{ name:"Jacques Kallis", runs:25534, avg:44.36, sr:72, wickets:577 },
{ name:"Rahul Dravid", runs:24208, avg:42.52, sr:71, wickets:1 },
{ name:"Rohit Sharma", runs:"18000+", avg:48, sr:90, wickets:8 },
{ name:"Joe Root", runs:"19000+", avg:50, sr:82, wickets:50 },
{ name:"AB de Villiers", runs:20014, avg:50.66, sr:101, wickets:2 },
{ name:"Steve Smith", runs:"16000+", avg:48, sr:82, wickets:17 },
{ name:"Kane Williamson", runs:"18000+", avg:47, sr:81, wickets:30 },
{ name:"Hashim Amla", runs:18672, avg:46.64, sr:88, wickets:0 },
{ name:"Alastair Cook", runs:15737, avg:45.35, sr:46, wickets:0 },
{ name:"Sunil Gavaskar", runs:13214, avg:46.20, sr:66, wickets:0 },
{ name:"Viv Richards", runs:15261, avg:47.00, sr:90, wickets:118 },
{ name:"Mahela Jayawardene", runs:25957, avg:39.15, sr:70, wickets:8 },
{ name:"Inzamam-ul-Haq", runs:20580, avg:39.52, sr:74, wickets:0 },
{ name:"Younis Khan", runs:17790, avg:40.50, sr:65, wickets:0 },
{ name:"Mohammad Yousuf", runs:17134, avg:41.71, sr:75, wickets:0 },
{ name:"Ross Taylor", runs:18199, avg:44.16, sr:83, wickets:3 },
{ name:"Martin Crowe", runs:7044, avg:45.36, sr:72, wickets:29 },
{ name:"Aravinda de Silva", runs:15645, avg:39.58, sr:81, wickets:106 },
{ name:"Damien Martyn", runs:13214, avg:46.37, sr:80, wickets:0 },
{ name:"VVS Laxman", runs:11119, avg:45.97, sr:56, wickets:0 },
{ name:"Michael Clarke", runs:17112, avg:44.58, sr:79, wickets:31 },
{ name:"Chris Gayle", runs:19593, avg:37.83, sr:87, wickets:167 },
{ name:"Brendon McCullum", runs:14676, avg:38.64, sr:81, wickets:0 },
{ name:"Quinton de Kock", runs:12654, avg:45, sr:96, wickets:0 },
{ name:"Babar Azam", runs:"13000+", avg:49, sr:89, wickets:0 },
{ name:"Faf du Plessis", runs:"15000+", avg:46, sr:87, wickets:0 },
{ name:"Shai Hope", runs:"10000+", avg:48, sr:85, wickets:0 },
{ name:"KL Rahul", runs:"8000+", avg:40, sr:88, wickets:0 },
{ name:"Ben Stokes", runs:"10000+", avg:36, sr:80, wickets:200 },
{ name:"Jos Buttler", runs:"11000+", avg:40, sr:120, wickets:0 },
{ name:"Glenn Maxwell", runs:"9000+", avg:35, sr:120, wickets:150 },
{ name:"Allan Border", runs:17698, avg:50.56, sr:60, wickets:73 },
{ name:"Javed Miandad", runs:16213, avg:41.70, sr:67, wickets:1 },
{ name:"Gordon Greenidge", runs:13215, avg:44.72, sr:75, wickets:0 },
{ name:"Desmond Haynes", runs:12650, avg:42.29, sr:70, wickets:0 },
{ name:"Matthew Hayden", runs:15066, avg:47.27, sr:67, wickets:0 },
{ name:"Graeme Smith", runs:17236, avg:42.37, sr:71, wickets:0 },
{ name:"Kevin Pietersen", runs:13797, avg:44.66, sr:76, wickets:10 },
{ name:"Tillakaratne Dilshan", runs:17671, avg:39.27, sr:86, wickets:106 },
{ name:"Herschelle Gibbs", runs:14661, avg:41.95, sr:84, wickets:0 },
{ name:"Virender Sehwag", runs:17253, avg:42.15, sr:82, wickets:136 }
];

// Load dropdowns
function loadPlayers() {
    let p1 = document.getElementById("player1");
    let p2 = document.getElementById("player2");

    players.forEach((player, index) => {
        p1.add(new Option(player.name, index));
        p2.add(new Option(player.name, index));
    });
}

// Compare function
function comparePlayers() {
    let p1 = players[document.getElementById("player1").value];
    let p2 = players[document.getElementById("player2").value];

    let result = `
    <h2>Comparison Result</h2>
    <table>
        <tr>
            <th>Stat</th>
            <th>${p1.name}</th>
            <th>${p2.name}</th>
        </tr>
        <tr><td>Runs</td><td>${p1.runs}</td><td>${p2.runs}</td></tr>
        <tr><td>Average</td><td>${p1.avg}</td><td>${p2.avg}</td></tr>
        <tr><td>Strike Rate</td><td>${p1.sr}</td><td>${p2.sr}</td></tr>
        <tr><td>Wickets</td><td>${p1.wickets}</td><td>${p2.wickets}</td></tr>
    </table>
    `;

    document.getElementById("result").innerHTML = result;
}

// Run on load
window.onload = loadPlayers;