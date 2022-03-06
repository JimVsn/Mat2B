// if(document.documentElement.clientWidth < 700) {
//     // тут ваш скрипт
//     document.getElementById('elem').style.display = 'none';
//     document.getElementById('menu').style.display = 'none';
//   }
//   if(document.documentElement.clientWidth < 700) {
//       // тут ваш скрипт
//       document.getElementById('mobile').style.display = 'flex';
//       // document.classList.remove('.line-winHome-persent');
      
//     }
  


    

const allLineButton = document.querySelector('.line__all-line');
const resultMathButton = document.querySelector('.math-button');
const showTableMobile = document.querySelector('.line__persent-container_mod');

////////////////////////////Общие селекторы выбора лиг и команд///////////////////////////////////////////\\
const leagueHome = document.querySelector('.leagueHome')
const leagueAway = document.querySelector('.leagueAway');
const NameHome = document.querySelector('.container__selectNameHome');
const teamVsHome = document.querySelector('.line__teamVs-home');
const NameAway = document.querySelector('.container__selectNameAway');
const vs = document.querySelector('.line__teamVs-vs');
const teamVsHomeMod = document.querySelector('.line__teamVs-home_mod');
const vsMod = document.querySelector('.line__teamVs-vs_mod');

const chemShip = document.querySelector('.container__selectName_Cship');
const chemShipAway = document.querySelector('.container__selectName_Cship-away')

const BundesligaHome = document.querySelector('.container__selectNameHome-Bundesliga')
const BundesligaAway = document.querySelector('.container__selectName_Bundesliga-away')

const BundesligaTwoHome = document.querySelector('.container__selectNameHome-BundesligaTwo')
const BundesligaTwoAway = document.querySelector('.container__selectName_BundesligaTwo-away')

const LaLigaHome = document.querySelector('.container__selectNameHome-LaLiga')
const LaLigaAway = document.querySelector('.container__selectName_LaLiga-away')

const LaLigaTwoHome = document.querySelector('.container__selectNameHome-LaLigaTwo')
const LaLigaTwoAway = document.querySelector('.container__selectName_LaLigaTwo-away')

const SeriaAHome = document.querySelector('.container__selectNameHome-SeriaA')
const SeriaAAway = document.querySelector('.container__selectName_SeriaA-away')

const SeriaBHome = document.querySelector('.container__selectNameHome-SeriaB')
const SeriaBAway = document.querySelector('.container__selectName_SeriaB-away')

const League1Home = document.querySelector('.container__selectNameHome-League1')
const League1Away = document.querySelector('.container__selectName_League1-away')

const League2Home = document.querySelector('.container__selectNameHome-League2')
const League2Away = document.querySelector('.container__selectName_League2-away')

const PrimeiraHome = document.querySelector('.container__selectNameHome-Primeira')
const PrimeiraAway = document.querySelector('.container__selectName_Primeira-away')


function areaRectangle(){
    var a=1*document.formMath.homeScored.value;
    var b=1*document.formMath.awayScored.value;
    var e=1*document.formMath.homeMissed.value;
    var o=1*document.formMath.awayMissed.value;
    var p=1*document.formMath.selectAttackHome.value;
    var q=1*document.formMath.selectAttackAway.value;
    var d=1*document.formMath.selectDefHome.value;
    var f=1*document.formMath.selectDefAway.value;
   //  var j=1*document.formMath.teamClassHome.value;
   //  var k=1*document.formMath.teamClassAway.value;
    var j=1;
    var k=1;
    const classHome = NameHome.value;
    const classAway = NameAway.value;
    const chempionship = chemShip.value;
    const classchemShip = Number.parseInt(chempionship)
    const chemShipAwayvalue = chemShipAway.value;
    const classchemShipAway = Number.parseInt(chemShipAwayvalue);
    const BundesligaHomeValue = BundesligaHome.value;
    const classsBundesligaHomeValue = Number.parseInt(BundesligaHomeValue);
    const BundesligaAwayValue = BundesligaAway.value;
    const classBundesligaAway = Number.parseInt(BundesligaAwayValue);
    const  BundesligaTwoHomeValue =  BundesligaTwoHome.value;
    const classBundesligaTwoHome = Number.parseInt(BundesligaTwoHomeValue);
    const  BundesligaTwoAwayValue =  BundesligaTwoAway.value;
    const classBundesligaTwoAway = Number.parseInt(BundesligaTwoAwayValue);
    const  LaLigaHomeValue =  LaLigaHome.value;
    const classLaLigaHome = Number.parseInt(LaLigaHomeValue);
    const  LaLigaAwayValue =  LaLigaAway.value;
    const classLaLigaAway = Number.parseInt(LaLigaAwayValue);
    const  LaLigaTwoHomeValue =  LaLigaTwoHome.value;
    const classLaLigaTwoHome = Number.parseInt(LaLigaTwoHomeValue);
    const  LaLigaTwoAwayValue =  LaLigaTwoAway.value;
    const classLaLigaTwoAway = Number.parseInt(LaLigaTwoAwayValue);
    const  SeriaAHomeHomeValue =  SeriaAHome.value;
    const classSeriaAHome = Number.parseInt(SeriaAHomeHomeValue);
    const  SeriaAAwayValue =  SeriaAAway.value;
    const classSeriaAAway = Number.parseInt(SeriaAAwayValue);
    const  SeriaBHomeHomeValue =  SeriaBHome.value;
    const classSeriaBHome = Number.parseInt(SeriaBHomeHomeValue);
    const  SeriaBAwayValue =  SeriaBAway.value;
    const classSeriaBAway = Number.parseInt(SeriaBAwayValue);
    const  League1HomeHomeValue =  League1Home.value;
    const classLeague1Home = Number.parseInt(League1HomeHomeValue);
    const  League1AwayValue =  League1Away.value;
    const classLeague1Away = Number.parseInt(League1AwayValue);
    const  League2HomeHomeValue =  League2Home.value;
    const classLeague2Home = Number.parseInt(League2HomeHomeValue);
    const  League2AwayValue =  League2Away.value;
    const classLeague2Away = Number.parseInt(League2AwayValue);
    const  PrimeiraHomeHomeValue =  PrimeiraHome.value;
    const classPrimeiraHome = Number.parseInt(PrimeiraHomeHomeValue);
    const  PrimeiraAwayValue =  PrimeiraAway.value;
    const classPrimeiraAway = Number.parseInt(PrimeiraAwayValue);
    
    
      console.log(classPrimeiraAway)
    

    if (classHome>=800000000) j=10;
    if (classHome>=500000000 && classHome<800000000) j=9;
    if (classHome>=300000000 && classHome<500000000) j=8;
    if (classHome>=200000000 && classHome<300000000) j=7;
    if (classHome>=150000000 && classHome<200000000) j=6;
    if (classHome>=50000000 && classHome<150000000) j=5;
    if (classHome>=30000000 && classHome<50000000) j=4;
    if (classHome>=15000000 && classHome<30000000) j=3;
    if (classHome>=10000000 && classHome<15000000) j=2;
    if (classHome<10000000) j=1;

  
      

    if (classchemShip>=800000000)  j=10;
    if (classchemShip>=500000000 && classchemShip<800000000) j=9;
    if (classchemShip>=300000000 && classchemShip<500000000) j=8;
    if (classchemShip>=200000000 && classchemShip<300000000) j=7;
    if (classchemShip>=150000000 && classchemShip<200000000) j=6;
    if (classchemShip>=50000000 && classchemShip<150000000) j=5;
    if (classchemShip>=30000000 && classchemShip<50000000) j=4;
    if (classchemShip>=15000000 && classchemShip<30000000)  j=3;
    if (classchemShip>=10000000 && classchemShip<15000000) j=2;
   //  if (classchemShip<10000000) j=1;

   if (classsBundesligaHomeValue>=800000000)  j=10;
    if (classsBundesligaHomeValue>=500000000 && classsBundesligaHomeValue<800000000) j=9;
    if (classsBundesligaHomeValue>=300000000 && classsBundesligaHomeValue<500000000) j=8;
    if (classsBundesligaHomeValue>=200000000 && classsBundesligaHomeValue<300000000) j=7;
    if (classsBundesligaHomeValue>=150000000 && classsBundesligaHomeValue<200000000) j=6;
    if (classsBundesligaHomeValue>=50000000 && classsBundesligaHomeValue<150000000) j=5;
    if (classsBundesligaHomeValue>=30000000 && classsBundesligaHomeValue<50000000) j=4;
    if (classsBundesligaHomeValue>=15000000 && classsBundesligaHomeValue<30000000)  j=3;
    if (classsBundesligaHomeValue>=10000000 && classsBundesligaHomeValue<15000000) j=2;
    
    if (classBundesligaTwoHome>=800000000)  j=10;
    if (classBundesligaTwoHome>=500000000 && classBundesligaTwoHome<800000000) j=9;
    if (classBundesligaTwoHome>=300000000 && classBundesligaTwoHome<500000000) j=8;
    if (classBundesligaTwoHome>=200000000 && classBundesligaTwoHome<300000000) j=7;
    if (classBundesligaTwoHome>=150000000 && classBundesligaTwoHome<200000000) j=6;
    if (classBundesligaTwoHome>=50000000 && classBundesligaTwoHome<150000000) j=5;
    if (classBundesligaTwoHome>=30000000 && classBundesligaTwoHome<50000000) j=4;
    if (classBundesligaTwoHome>=15000000 && classBundesligaTwoHome<30000000)  j=3;
    if (classBundesligaTwoHome>=10000000 && classBundesligaTwoHome<15000000) j=2;

    if (classLaLigaHome>=800000000)  j=10;
    if (classLaLigaHome>=500000000 && classLaLigaHome<800000000) j=9;
    if (classLaLigaHome>=300000000 && classLaLigaHome<500000000) j=8;
    if (classLaLigaHome>=200000000 && classLaLigaHome<300000000) j=7;
    if (classLaLigaHome>=150000000 && classLaLigaHome<200000000) j=6;
    if (classLaLigaHome>=50000000 && classLaLigaHome<150000000) j=5;
    if (classLaLigaHome>=30000000 && classLaLigaHome<50000000) j=4;
    if (classLaLigaHome>=15000000 && classLaLigaHome<30000000)  j=3;
    if (classLaLigaHome>=10000000 && classLaLigaHome<15000000) j=2;

    if (classLaLigaTwoHome>=800000000)  j=10;
    if (classLaLigaTwoHome>=500000000 && classLaLigaTwoHome<800000000) j=9;
    if (classLaLigaTwoHome>=300000000 && classLaLigaTwoHome<500000000) j=8;
    if (classLaLigaTwoHome>=200000000 && classLaLigaTwoHome<300000000) j=7;
    if (classLaLigaTwoHome>=150000000 && classLaLigaTwoHome<200000000) j=6;
    if (classLaLigaTwoHome>=50000000 && classLaLigaTwoHome<150000000) j=5;
    if (classLaLigaTwoHome>=30000000 && classLaLigaTwoHome<50000000) j=4;
    if (classLaLigaTwoHome>=15000000 && classLaLigaTwoHome<30000000)  j=3;
    if (classLaLigaTwoHome>=10000000 && classLaLigaTwoHome<15000000) j=2;

    if (classSeriaAHome>=800000000)  j=10;
    if (classSeriaAHome>=500000000 && classSeriaAHome<800000000) j=9;
    if (classSeriaAHome>=300000000 && classSeriaAHome<500000000) j=8;
    if (classSeriaAHome>=200000000 && classSeriaAHome<300000000) j=7;
    if (classSeriaAHome>=150000000 && classSeriaAHome<200000000) j=6;
    if (classSeriaAHome>=50000000 && classSeriaAHome<150000000) j=5;
    if (classSeriaAHome>=30000000 && classSeriaAHome<50000000) j=4;
    if (classSeriaAHome>=15000000 && classSeriaAHome<30000000)  j=3;
    if (classSeriaAHome>=10000000 && classSeriaAHome<15000000) j=2;

    if (classSeriaBHome>=800000000)  j=10;
    if (classSeriaBHome>=500000000 && classSeriaBHome<800000000) j=9;
    if (classSeriaBHome>=300000000 && classSeriaBHome<500000000) j=8;
    if (classSeriaBHome>=200000000 && classSeriaBHome<300000000) j=7;
    if (classSeriaBHome>=150000000 && classSeriaBHome<200000000) j=6;
    if (classSeriaBHome>=50000000 && classSeriaBHome<150000000) j=5;
    if (classSeriaBHome>=30000000 && classSeriaBHome<50000000) j=4;
    if (classSeriaBHome>=15000000 && classSeriaBHome<30000000)  j=3;
    if (classSeriaBHome>=10000000 && classSeriaBHome<15000000) j=2;

    if (classLeague1Home>=800000000)  j=10;
    if (classLeague1Home>=500000000 && classLeague1Home<800000000) j=9;
    if (classLeague1Home>=300000000 && classLeague1Home<500000000) j=8;
    if (classLeague1Home>=200000000 && classLeague1Home<300000000) j=7;
    if (classLeague1Home>=150000000 && classLeague1Home<200000000) j=6;
    if (classLeague1Home>=50000000 && classLeague1Home<150000000) j=5;
    if (classLeague1Home>=30000000 && classLeague1Home<50000000) j=4;
    if (classLeague1Home>=15000000 && classLeague1Home<30000000)  j=3;
    if (classLeague1Home>=10000000 && classLeague1Home<15000000) j=2;
    
    if (classLeague2Home>=800000000)  j=10;
    if (classLeague2Home>=500000000 && classLeague2Home<800000000) j=9;
    if (classLeague2Home>=300000000 && classLeague2Home<500000000) j=8;
    if (classLeague2Home>=200000000 && classLeague2Home<300000000) j=7;
    if (classLeague2Home>=150000000 && classLeague2Home<200000000) j=6;
    if (classLeague2Home>=50000000 && classLeague2Home<150000000) j=5;
    if (classLeague2Home>=30000000 && classLeague2Home<50000000) j=4;
    if (classLeague2Home>=15000000 && classLeague2Home<30000000)  j=3;
    if (classLeague2Home>=10000000 && classLeague2Home<15000000) j=2;

    if (classPrimeiraHome>=800000000)  j=10;
    if (classPrimeiraHome>=500000000 && classPrimeiraHome<800000000) j=9;
    if (classPrimeiraHome>=300000000 && classPrimeiraHome<500000000) j=8;
    if (classPrimeiraHome>=200000000 && classPrimeiraHome<300000000) j=7;
    if (classPrimeiraHome>=150000000 && classPrimeiraHome<200000000) j=6;
    if (classPrimeiraHome>=50000000 && classPrimeiraHome<150000000) j=5;
    if (classPrimeiraHome>=30000000 && classPrimeiraHome<50000000) j=4;
    if (classPrimeiraHome>=15000000 && classPrimeiraHome<30000000)  j=3;
    if (classPrimeiraHome>=10000000 && classPrimeiraHome<15000000) j=2;

    
   ////////////////// Away ////////////////////////////

    if (classAway>=800000000) k=10;
    if (classAway>=500000000 && classAway<800000000) k=9;
    if (classAway>=300000000 && classAway<500000000) k=8;
    if (classAway>=200000000 && classAway<300000000) k=7;
    if (classAway>=150000000 && classAway<200000000) k=6;
    if (classAway>=50000000 && classAway<150000000) k=5;
    if (classAway>=30000000 && classAway<50000000) k=4;
    if (classAway>=15000000 && classAway<30000000) k=3;
    if (classAway>=10000000 && classAway<15000000) k=2;
    if (classAway<10000000) k=1;

    if (classchemShipAway>=800000000) k=10;
    if (classchemShipAway>=500000000 && classchemShipAway<800000000) k=9;
    if (classchemShipAway>=300000000 && classchemShipAway<500000000) k=8;
    if (classchemShipAway>=200000000 && classchemShipAway<300000000) k=7;
    if (classchemShipAway>=150000000 && classchemShipAway<200000000) k=6;
    if (classchemShipAway>=50000000 && classchemShipAway<150000000) k=5;
    if (classchemShipAway>=30000000 && classchemShipAway<50000000) k=4;
    if (classchemShipAway>=15000000 && classchemShipAway<30000000) k=3;
    if (classchemShipAway>=10000000 && classchemShipAway<15000000) k=2;

    if (classBundesligaAway>=800000000) k=10;
    if (classBundesligaAway>=500000000 && classBundesligaAway<800000000) k=9;
    if (classBundesligaAway>=300000000 && classBundesligaAway<500000000) k=8;
    if (classBundesligaAway>=200000000 && classBundesligaAway<300000000) k=7;
    if (classBundesligaAway>=150000000 && classBundesligaAway<200000000) k=6;
    if (classBundesligaAway>=50000000 && classBundesligaAway<150000000) k=5;
    if (classBundesligaAway>=30000000 && classBundesligaAway<50000000) k=4;
    if (classBundesligaAway>=15000000 && classBundesligaAway<30000000) k=3;
    if (classBundesligaAway>=10000000 && classBundesligaAway<15000000) k=2;

    if (classBundesligaTwoAway>=800000000) k=10;
    if (classBundesligaTwoAway>=500000000 && classBundesligaTwoAway<800000000) k=9;
    if (classBundesligaTwoAway>=300000000 && classBundesligaTwoAway<500000000) k=8;
    if (classBundesligaTwoAway>=200000000 && classBundesligaTwoAway<300000000) k=7;
    if (classBundesligaTwoAway>=150000000 && classBundesligaTwoAway<200000000) k=6;
    if (classBundesligaTwoAway>=50000000 && classBundesligaTwoAway<150000000) k=5;
    if (classBundesligaTwoAway>=30000000 && classBundesligaTwoAway<50000000) k=4;
    if (classBundesligaTwoAway>=15000000 && classBundesligaTwoAway<30000000) k=3;
    if (classBundesligaTwoAway>=10000000 && classBundesligaTwoAway<15000000) k=2;

    if (classLaLigaAway>=800000000) k=10;
    if (classLaLigaAway>=500000000 && classLaLigaAway<800000000) k=9;
    if (classLaLigaAway>=300000000 && classLaLigaAway<500000000) k=8;
    if (classLaLigaAway>=200000000 && classLaLigaAway<300000000) k=7;
    if (classLaLigaAway>=150000000 && classLaLigaAway<200000000) k=6;
    if (classLaLigaAway>=50000000 && classLaLigaAway<150000000) k=5;
    if (classLaLigaAway>=30000000 && classLaLigaAway<50000000) k=4;
    if (classLaLigaAway>=15000000 && classLaLigaAway<30000000) k=3;
    if (classLaLigaAway>=10000000 && classLaLigaAway<15000000) k=2;

    if (classLaLigaTwoAway>=800000000) k=10;
    if (classLaLigaTwoAway>=500000000 && classLaLigaTwoAway<800000000) k=9;
    if (classLaLigaTwoAway>=300000000 && classLaLigaTwoAway<500000000) k=8;
    if (classLaLigaTwoAway>=200000000 && classLaLigaTwoAway<300000000) k=7;
    if (classLaLigaTwoAway>=150000000 && classLaLigaTwoAway<200000000) k=6;
    if (classLaLigaTwoAway>=50000000 && classLaLigaTwoAway<150000000) k=5;
    if (classLaLigaTwoAway>=30000000 && classLaLigaTwoAway<50000000) k=4;
    if (classLaLigaTwoAway>=15000000 && classLaLigaTwoAway<30000000) k=3;
    if (classLaLigaTwoAway>=10000000 && classLaLigaTwoAway<15000000) k=2;

    if (classSeriaAAway>=800000000) k=10;
    if (classSeriaAAway>=500000000 && classSeriaAAway<800000000) k=9;
    if (classSeriaAAway>=300000000 && classSeriaAAway<500000000) k=8;
    if (classSeriaAAway>=200000000 && classSeriaAAway<300000000) k=7;
    if (classSeriaAAway>=150000000 && classSeriaAAway<200000000) k=6;
    if (classSeriaAAway>=50000000 && classSeriaAAway<150000000) k=5;
    if (classSeriaAAway>=30000000 && classSeriaAAway<50000000) k=4;
    if (classSeriaAAway>=15000000 && classSeriaAAway<30000000) k=3;
    if (classSeriaAAway>=10000000 && classSeriaAAway<15000000) k=2;

    if (classSeriaBAway>=800000000) k=10;
    if (classSeriaBAway>=500000000 && classSeriaBAway<800000000) k=9;
    if (classSeriaBAway>=300000000 && classSeriaBAway<500000000) k=8;
    if (classSeriaBAway>=200000000 && classSeriaBAway<300000000) k=7;
    if (classSeriaBAway>=150000000 && classSeriaBAway<200000000) k=6;
    if (classSeriaBAway>=50000000 && classSeriaBAway<150000000) k=5;
    if (classSeriaBAway>=30000000 && classSeriaBAway<50000000) k=4;
    if (classSeriaBAway>=15000000 && classSeriaBAway<30000000) k=3;
    if (classSeriaBAway>=10000000 && classSeriaBAway<15000000) k=2;

    if (classLeague1Away>=800000000)  k=10;
    if (classLeague1Away>=500000000 && classLeague1Away<800000000) k=9;
    if (classLeague1Away>=300000000 && classLeague1Away<500000000) k=8;
    if (classLeague1Away>=200000000 && classLeague1Away<300000000) k=7;
    if (classLeague1Away>=150000000 && classLeague1Away<200000000) k=6;
    if (classLeague1Away>=50000000 && classLeague1Away<150000000) k=5;
    if (classLeague1Away>=30000000 && classLeague1Away<50000000) k=4;
    if (classLeague1Away>=15000000 && classLeague1Away<30000000)  k=3;
    if (classLeague1Away>=10000000 && classLeague1Away<15000000) k=2;

    if (classLeague2Away>=800000000)  k=10;
    if (classLeague2Away>=500000000 && classLeague2Away<800000000) k=9;
    if (classLeague2Away>=300000000 && classLeague2Away<500000000) k=8;
    if (classLeague2Away>=200000000 && classLeague2Away<300000000) k=7;
    if (classLeague2Away>=150000000 && classLeague2Away<200000000) k=6;
    if (classLeague2Away>=50000000 && classLeague2Away<150000000) k=5;
    if (classLeague2Away>=30000000 && classLeague2Away<50000000) k=4;
    if (classLeague2Away>=15000000 && classLeague2Away<30000000)  k=3;
    if (classLeague2Away>=10000000 && classLeague2Away<15000000) k=2;

    if (classPrimeiraAway>=800000000)  k=10;
    if (classPrimeiraAway>=500000000 && classPrimeiraAway<800000000) k=9;
    if (classPrimeiraAway>=300000000 && classPrimeiraAway<500000000) k=8;
    if (classPrimeiraAway>=200000000 && classPrimeiraAway<300000000) k=7;
    if (classPrimeiraAway>=150000000 && classPrimeiraAway<200000000) k=6;
    if (classPrimeiraAway>=50000000 && classPrimeiraAway<150000000) k=5;
    if (classPrimeiraAway>=30000000 && classPrimeiraAway<50000000) k=4;
    if (classPrimeiraAway>=15000000 && classPrimeiraAway<30000000)  k=3;
    if (classPrimeiraAway>=10000000 && classPrimeiraAway<15000000) k=2;
      
   //  console.log(j)
    console.log(k)

  var l=(a/5+o/5)-1.3;
  var r=(b/5+e/5)-1.3;
  var u=p-f;
  var i=q-d;
  var w=j-k;
  var m=l;
  var y=r;

 var m=m+(0);
 var y=y-(0);

if(u===1)
  m=m*0.8;
  if(u===2)
   m=m*0.5;
  if(u===3) 
   m=m*0.1;
  if(u===-1)
  m=m*1.1;
  if(u===-2)
   m=m*1.5;
  if(u===-3) 
   m=m*1.8; 
   if(i===1) 
   y=y*0.8; 
   if(i===2) 
   y=y*0.5;
   if(i===3) 
   y=y*0.1;
   if(i===-1) 
   y=y*1.1;
   if(i===-2) 
   y=y*1.5;
   if(i===-3) 
   y=y*1.8;
  
//    if (w===4) m=m+(1*2); y=y-(1*2);
//    if (w===3) m=m+(1*1.5); y=y-(1*1.5); 
//    if (w===2) m=m+(1*1); y=y-(1*1); 
//    if (w===1) m=m+(1*0.8); y=y-(1*0.8); 
//    if (w===-1) m=m-(1*0.8); y=y+(1*0.8); 
//    if (w===-2) m=m-(1*1); y=y+(1*1);
//    if (w===-3) m=m-(1*1.5); y=y+(1*1.5);
//    if (w===-4) m=m-(1*2); y=y+(1*2);
  
//   if (w===4) y=y-(1*2);
//   if (w===3) y=y-(1*1.5);
//   if (w===2) y=y-(1*1);
//   if (w===1) y=y-(1*0.8);
//   if (w===-1) y=y+(1*0.8);
//   if (w===-2) y=y+(1*1);
//   if (w===-3) y=y+(1*1.5);
//   if (w===-4) y=y+(1*2);

if (w===9) m=m+(3); y=y-(3);
if (w===8) m=m+(2.5); y=y-(2.5);
if (w===7) m=m+(2); y=y-(2);
if (w===6) m=m+(1.8); y=y-(1.8);
if (w===5) m=m+(1.5); y=y-(1.5);
if (w===4) m=m+(1.3); y=y-(1.3);
if (w===3) m=m+(1.15); y=y-(1.15);
if (w===2) m=m+(1); y=y-(1);
if (w===1) m=m+(0.5); y=y-(0.5);

if (w===-9) m=m-(3); y=y+(3);
if (w===-8) m=m-(2.5); y=y+(2.5);
if (w===-7) m=m-(2); y=y+(2);
if (w===-6) m=m-(1.8); y=y+(1.8);
if (w===-5) m=m-(1.5); y=y+(1.5);
if (w===-4) m=m-(1.3); y=y+(1.3);
if (w===-3) m=m-(1.15); y=y+(1.15);
if (w===-2) m=m-(1); y=y+(1);
if (w===-1) m=m-(0.5); y=y+(0.5);
  
  if (m<0.1) m=0.1;
  if (y<0.1) y=0.1;
  
 
  return {
      mm: m.toFixed(1), yy: y.toFixed(1)
  };

}


  //Функция Пуассона
function PoissonDistrib(key_var , lambda_var){
    const data = areaRectangle();
    const resultHome = data.mm;
    const resultAwayTeam = data.yy;

    console.log(data.mm)
    console.log(data.yy)

    console.log(resultHome)
    console.log(resultAwayTeam)
    
    
     
    var u = resultHome ; //Полученное среднее значение голов домашней команды из предыдущей формулы
    var awaygoal = resultAwayTeam; //Полученное среднее значение голов команды гостей из предыдущей формулы
    const k = [0, 1, 2, 3, 4, 5, 6, 7];  //массив 0т 0 до 7 для хозяев
    var awayK = [0, 1, 2, 3, 4, 5, 6, 7];  //массив для гостей
  
    var result = k.map(i=>(Fixed(PoissonTerm( u, [i] ),8,4)*100).toFixed(2),) 
    var resultAway =awayK.map(i=>Fixed(PoissonTerm( awaygoal,[i] ),8,4),);
  
  
  //цикл для получения процентов для каждого счета
    var finalResult = []
    for (var i=0; i<result.length; i++) {
     for (var j=0; j<resultAway.length; j++) {
        finalResult.push(result[i]*resultAway[j]);
       }
      }
    console.log(finalResult)
  
    // получение максимального элемента массива
    var max = getMaxValue(finalResult);
    function getMaxValue(finalResult){
     var max = finalResult[0]; // берем первый элемент массива
     for (var f = 0; f < finalResult.length; f++) { // переберем весь массив
         // если элемент больше, чем в переменной, то присваиваем его значение переменной
         if (max < finalResult[f]) max = finalResult[f]; 
     }
     // возвращаем максимальное значение
     return max;
  }
    console.log(max);
    //Находим индекс наибольшего значения массива finalResult
    const maxIndex = Math.max(...finalResult);
    const randomIndex = finalResult.indexOf(maxIndex);
    console.log(randomIndex)
    //Массив со счетами 
    const allScore = [
      "0 - 0", "0 - 1", "0 - 2", "0 -3", "0 - 4", "0 - 5", "0 - 6", "0 - 7",
      "1 - 0", "1 - 1", "1 - 2", "1 - 3", "1 - 4", "1 - 5", "1 - 6", "1 - 7", "2 - 0", "2 - 1", 
      "2 - 2", "2 - 3", "2 - 4", "2 - 5", "2 - 6", "2 - 7", "3 - 0", "3 - 1", "3 - 2", "3 - 3", "3 - 4", 
      "3 - 5", "3 - 6", "3 - 7", "4 - 0", "4 - 1", "4 - 2", "4 - 3", "4 - 4", "4 - 5", "4 - 6", "4 - 7",
      "5 - 0", "5 - 1", "5 - 2", "5 - 3", "5 - 4", "5 - 5", "5 - 6", "5 - 7", "6 - 0", "6 - 1", "6 - 2",
      "6 - 3", "6 - 4", "6 - 5", "6 - 6", "6 - 7", "7 - 0", "7 - 1", "7 - 2", "7 - 3", "7 - 4", "7 - 5",
      "7 - 6", "7 - 7"]
     
    //Выводим самый вероятный счет
    const scoreIndex = allScore[randomIndex]
    const scoreResult = document.querySelector('.line__result-goalscore');
    scoreResult.textContent = scoreIndex

    const scoreResultMod = document.querySelector('.line__result-goalscore_mod');
    scoreResultMod.textContent = scoreIndex
    console.log(scoreIndex)

    //Выводим все счета в таблицу

    console.log("Вероятность счета " + allScore[0] + " составляет " + finalResult[0].toFixed(2) + " %")
  
    //вероятность счета
    // const scoreVer = document.querySelector('.score-ver');
    // scoreVer.textContent = max.toFixed(2) + ' %';
      //Победа хозяев
  
    const oneNull = finalResult[8]; //1-0  

    const homeOneNull = document.querySelector('.home-oneNull');
    homeOneNull.textContent = finalResult[8].toFixed(2) + ' %';
    const homeOneNullProfit = document.querySelector('.home-oneNull-profit');
    homeOneNullProfit.textContent = ((1.15/(finalResult[8]))*100).toFixed(2);

    const twoNull = finalResult[16]; //2-0

    const homeTwoNull = document.querySelector('.home-twoNull');
    
    const homeTwoNullProfit = document.querySelector('.home-twoNull-profit');
    

    function twoNullShow () {
      if (finalResult[17]> 0) {
        document.querySelector('.line__box-line_twoNull-show').style.display = 'flex';
        homeTwoNull.textContent = finalResult[16].toFixed(2) + ' %';
        homeTwoNullProfit.textContent = ((1.15/(finalResult[16]))*100).toFixed(2);
      } 
   }

   twoNullShow ();

    const twoOne = finalResult[17]; //2-1

    const homeTwoOne = document.querySelector('.home-twoOne');
    
    const homeTwoOneProfit = document.querySelector('.home-twoOne-profit');
    

    function twoOneShow () {
      if (finalResult[17]> 0) {
        document.querySelector('.line__box-line_twoOne-show').style.display = 'flex';
        homeTwoOne.textContent = finalResult[17].toFixed(2) + ' %';
        homeTwoOneProfit.textContent = ((1.15/(finalResult[17]))*100).toFixed(2);
      } 
   }

   twoOneShow ();

    const threeNull = finalResult[24]; //3-0

    const homeThreeNull = document.querySelector('.home-threeNull');
    
    const homeThreeNullProfit = document.querySelector('.home-threeNull-profit');
    

    function threeNullShow () {
      if (finalResult[24]> 0) {
        document.querySelector('.line__box-line_threeNull-show').style.display = 'flex';
        homeThreeNull.textContent = finalResult[24].toFixed(2) + ' %';
        homeThreeNullProfit.textContent = ((1.15/(finalResult[24]))*100).toFixed(2);
      } 
   }

   threeNullShow ();

    const threeOne = finalResult[25]; //3-1
    const threeTwo = finalResult[26]; //3-2
    const fourNull = finalResult[32]; //4-0

    const homeFourNull = document.querySelector('.home-fourNull');
    
    const homeFourNullProfit = document.querySelector('.home-fourNull-profit');
   //  homeFourNullProfit.textContent = ((1.15/(finalResult[32]))*100).toFixed(2);

    function fourNullShow () {
       if (finalResult[32]> 0) {
         document.querySelector('.line__box-line_fourNull-show').style.display = 'flex';
         homeFourNull.textContent = finalResult[32].toFixed(2) + ' %';
         homeFourNullProfit.textContent = ((1.15/(finalResult[32]))*100).toFixed(2);
       } 
    }

    fourNullShow ();

    const fourOne = finalResult[33]; //4-1
    const fourTwo = finalResult[34];//4-2
    const fourThree = finalResult[35]; //4-3
    const fiveNull = finalResult[40]; //5-0
    const fiveOne = finalResult[41]; //5-1
    const fiveTwo = finalResult[42];//5-2
    const fiveThree = finalResult[43]; //5-3
    const fiveFour = finalResult[44]; //5-4
    const sixNull = finalResult[48]; //6-0
    const sixOne = finalResult[49]; //6-1
    const sixTwo = finalResult[50];//6-2
    const sixThree = finalResult[51]; //6-3
    const sixFour = finalResult[52]; //6-4
    const sixFive = finalResult[53]; //6-5
    const sevenNull = finalResult[56]; //7-0
    const sevenOne = finalResult[57]; //7-1
    const sevenTwo = finalResult[58];//7-2
    const sevenThree = finalResult[59]; //7-3
    const sevenFour = finalResult[60]; //7-4
    const sevenFive = finalResult[61]; //7-5
    const sevenSix = finalResult[62]; //7-6
  
    //Ничьи
  
  
    const nullNull = finalResult[0]; //0-0

    const awayNullNull = document.querySelector('.away-nullNull');
    const awayNullNullProfit = document.querySelector('.away-nullNull-profit');
    
    function nullNullShow () {
      if (finalResult[0]> 0) {
         document.querySelector('.line__box-line_nullNull-show').style.display = 'flex';
         awayNullNull.textContent = finalResult[0].toFixed(2) + ' %';
         awayNullNullProfit.textContent = ((1.15/(finalResult[0]))*100).toFixed(2);
      }
   }
      nullNullShow ()

    const oneOne = finalResult[9]; //1-1

    const homeOneOne = document.querySelector('.home-oneOne'); 
    const homeOneOneProfit = document.querySelector('.home-oneOne-profit');
    

    function oneOneShow () {
      if (finalResult[9]> 0) {
         document.querySelector('.line__box-line_oneOne-show').style.display = 'flex';
         homeOneOne.textContent = finalResult[9].toFixed(2) + ' %';
         homeOneOneProfit.textContent = ((1.15/(finalResult[9]))*100).toFixed(2);
      }
   }
      oneOneShow ()

    const twoTwo = finalResult[18]; //2-2
    const threeThree = finalResult[27]; //3-3
    const fourFour = finalResult[36]; //4-4
    const fiveFive = finalResult[45]; //5-5
    const sixSix = finalResult[54]; //6-6
    const sevenSeven = finalResult[63]; //7-7
  
    //Победа гостей
  
    
  
    const nullOne = finalResult[1];  //0-1

    const awayNullOne = document.querySelector('.away-nullOne');
    awayNullOne.textContent = finalResult[1].toFixed(2) + ' %';
    const awayNullOneProfit = document.querySelector('.away-nullOne-profit');
    awayNullOneProfit.textContent = ((1.15/(finalResult[1]))*100).toFixed(2);

    const nullTwo = finalResult[2]; //0-2
    const nullThree = finalResult[3]; //0-3
    const nullFour = finalResult[4]; //0-4
    const nullFive = finalResult[5];//0-5
    const nullSix = finalResult[6]; //0-6
    const nullSeven = finalResult[7]; //0-7 
    const oneTwo = finalResult[10]; //1-2
    const oneThree = finalResult[11]; //1-3
    const oneFour = finalResult[12]; //1-4
    const oneFive = finalResult[13]; //1-5
    const oneSix = finalResult[14]; //1-6
    const oneSeven = finalResult[15]; //1-7
    const twoThree = finalResult[19]; //2-3
    const twoFour = finalResult[20]; //2-4
    const twoFive = finalResult[21]; //2-5
    const twoSix = finalResult[22]; //2-6
    const twoSeven = finalResult[23]; //2-7
    const threeFour = finalResult[28]; //3-4
    const threeFive = finalResult[29]; //3-5
    const threeSix = finalResult[30]; //3-6
    const threeSeven = finalResult[31]; //3-7
    const fourFive = finalResult[37]; //4-5
    const fourSix = finalResult[38]; //4-6
    const fourSeven = finalResult[39]; //4-7
    const fiveSix = finalResult[46]; //5-6
    const fiveSeven = finalResult[47]; //5-7
    const sixSeven = finalResult[55]; //6-7
  
    
   //Процент победы домашней команды
   const winHomeTeam = oneNull+twoNull+twoOne+threeNull+threeOne+threeTwo+fourNull+fourOne+fourTwo+fourThree+fiveOne+fiveNull+fiveTwo+fiveThree+fiveFour+sixNull+sixOne+sixTwo+sixThree+sixFour+sixFive+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour+sevenFive+sevenSix;
   const winPersent = document.querySelector('.win-persent');
   winPersent.textContent = winHomeTeam.toFixed(2) + '%';

   const awinPersentMod = document.querySelector('.line-winHome-persent_mod');
   awinPersentMod.textContent = winHomeTeam.toFixed(2) + ' %';

   const lineWinHomePersent = document.querySelector('.line-winHome-persent');
   lineWinHomePersent.textContent = winHomeTeam.toFixed(2) + ' %';


   
  
   const profitWinFirstTeam = 1.15/(winHomeTeam/100);
   const profitKef = document.querySelector('.profit-kef');
   profitKef.textContent = profitWinFirstTeam.toFixed(2);

   const winProfitHome = document.querySelector('.win-profit-home');
   winProfitHome.textContent = profitWinFirstTeam.toFixed(2);

   const lineboxlinetextlinkmod = document.querySelector('.profit-kef_mod');
   lineboxlinetextlinkmod.textContent = profitWinFirstTeam.toFixed(2);
   
  
   //Процент победы выездной команды
   const winAwayTeam = nullOne+nullTwo+nullThree+nullFour+nullFive+nullSix+nullSeven+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoThree+twoFour+twoFive+twoSix+twoSeven+threeFour+threeFive+threeSix+threeSeven+fourFive+fourSix+fourSeven+fiveSix+fiveSeven+sixSeven;
   const lossPersent = document.querySelector('.awayWin-persent');
   lossPersent.textContent = winAwayTeam.toFixed(2) + '%';

   const awayWin = document.querySelector('.away-win');
   awayWin.textContent = winAwayTeam.toFixed(2) + ' %';

   const awayWinMod = document.querySelector('.away-win_mod');
   awayWinMod.textContent = winAwayTeam.toFixed(2) + ' %';
  
   const profitWinSecondTeam = 1.15/(winAwayTeam/100);
   const profitKefB = document.querySelector('.away-win-profit')
   profitKefB.textContent = profitWinSecondTeam.toFixed(2);

   const profitKefBMod = document.querySelector('.away-win-profit_mod')
   profitKefBMod.textContent = profitWinSecondTeam.toFixed(2);

   const winProfitAway = document.querySelector('.win-profit-away');
   winProfitAway.textContent = profitWinSecondTeam.toFixed(2);
   
  
   //Процент на ничью
   const drawHomeAway = 100-winHomeTeam.toFixed(2)-winAwayTeam.toFixed(2);
   const drawPersent = document.querySelector('.draw-persent');
   drawPersent.textContent = drawHomeAway.toFixed(2) + '%';

   const draw = document.querySelector('.draw');
   draw.textContent = drawHomeAway.toFixed(2) + ' %';
  
   const profitDraw = 1.15/(drawHomeAway/100);
   const profitKefA = document.querySelector('.draw-profit');
   profitKefA.textContent = profitDraw.toFixed(2);

   const drawMod = document.querySelector('.draw_mod')
   drawMod.textContent = drawHomeAway.toFixed(2) + ' %';

   const drawProfitMod = document.querySelector('.draw-profit_mod')
   drawProfitMod.textContent = profitDraw.toFixed(2);

   const winProfitDraw = document.querySelector('.win-profit-draw');
   winProfitDraw.textContent = profitDraw.toFixed(2);
   
  
   //Процент на 1х
   const oneXHomeTeam = winHomeTeam+drawHomeAway;
   const homeX = document.querySelector('.homeX')
   homeX.textContent = oneXHomeTeam.toFixed(2) + ' %';

   const homeXMod = document.querySelector('.homeX_mod')
   homeXMod.textContent = oneXHomeTeam.toFixed(2) + ' %';
  
   const profitXfirstTeam = 1.15/(oneXHomeTeam/100);
   const profitKefC = document.querySelector('.homeX-profit');
   profitKefC.textContent = profitXfirstTeam.toFixed(2);

   const profitKefCMod = document.querySelector('.homeX-profit_mod');
   profitKefCMod.textContent = profitXfirstTeam.toFixed(2);
  
   // 2x
   const twoXAwayTeam = winAwayTeam+drawHomeAway;
   const awayX = document.querySelector('.awayX');
   awayX.textContent = twoXAwayTeam.toFixed(2) + ' %';

   const awayXMod = document.querySelector('.awayX_mod');
   awayXMod.textContent = twoXAwayTeam.toFixed(2) + ' %';
  
   const profitXSecondTeam = 1.15/(twoXAwayTeam/100);
   const profitKefE = document.querySelector('.awayX-profit');
   profitKefE.textContent = profitXSecondTeam.toFixed(2); 

   const profitKefEMod = document.querySelector('.awayX-profit_mod');
   profitKefEMod.textContent = profitXSecondTeam.toFixed(2); 
  
   //12
   const notDrawHomeAway = 100-drawHomeAway;
   const notDraw = document.querySelector('.notDraw')
   notDraw.textContent = notDrawHomeAway.toFixed(2) + ' %';

   const notDrawMod = document.querySelector('.notDraw_mod')
   notDrawMod.textContent = notDrawHomeAway.toFixed(2) + ' %';
  
   const profitNotDraw = 1.15/(notDrawHomeAway/100);
   const profitKefD = document.querySelector('.notDraw-profit');
   profitKefD.textContent = profitNotDraw.toFixed(2);

   const profitKefDMod = document.querySelector('.notDraw-profit_mod');
   profitKefDMod.textContent = profitNotDraw.toFixed(2);
  
   //1(0)
   const homeNull = document.querySelector('.homeNull')
   homeNull.textContent = winHomeTeam.toFixed(2) + ' %';
   
  
   const profitNullFirstTeam = 1.15/(((winHomeTeam*100)/(100-drawHomeAway))/100);
   const profitKefF = document.querySelector('.homeNull-profit')
   profitKefF.textContent = profitNullFirstTeam.toFixed(2);
  
   //2(0)
   const awayNull = document.querySelector('.awayNull')
   awayNull.textContent = winAwayTeam.toFixed(2) + ' %';
  
   const profitNullSecondTeam = 1.15/(((winAwayTeam*100)/(100-drawHomeAway))/100);
   const profitKefG = document.querySelector('.awayNull-profit')
   profitKefG.textContent = profitNullSecondTeam.toFixed(2);
  
   //1(-1)
   const minusOneFirstTeam = twoNull+threeNull+threeOne+fourNull+fourOne+fourTwo+fiveNull+fiveOne+fiveTwo+fiveThree+sixNull+sixOne+sixTwo+sixThree+sixFour+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour+sevenFive;
   const homeMinusOne = document.querySelector('.home-minusOne')
//    homeMinusOne.textContent = minusOneFirstTeam.toFixed(2) + ' %';
  
   const profitMinusOneFirstTeam = 1.15/(minusOneFirstTeam/100);
   const profitKefH = document.querySelector('.home-minusOne-profit')
//    profitKefH.textContent = profitMinusOneFirstTeam.toFixed(2);
  
   //2(-1)
   const minusOneSecondTeam = nullTwo+nullThree+oneThree+nullFour+oneFour+twoFour+nullFive+oneFive+twoFive+threeFive+nullSix+oneSix+twoSix+threeSix+fourSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven+fiveSeven;
   const awayMinusOne = document.querySelector('.away-minusOne')
//    awayMinusOne.textContent = minusOneSecondTeam.toFixed(2) + ' %';
  
   const profitMinusOneSecondTeam = 1.15/(minusOneSecondTeam/100);
   const profitKefI = document.querySelector('.away-minusOne-profit')
//    profitKefI.textContent = profitMinusOneSecondTeam.toFixed(2);
  
   //1(-1,5)
   const homeMinusOneFive = document.querySelector('.home-minusOneFive');
   homeMinusOneFive.textContent = minusOneFirstTeam.toFixed(2) + ' %';
   const profitKefJ = document.querySelector('.home-minusOneFive-profit');

   const homeMinusOneFiveMod = document.querySelector('.home-minusOneFive_mod');
   homeMinusOneFiveMod.textContent = minusOneFirstTeam.toFixed(2) + ' %';
   const profitKefJMod = document.querySelector('.home-minusOneFive-profit_mod');
  
   const profitMinusOneFiveFirstTeam = 1.15/(minusOneFirstTeam/100);
   profitKefJ.textContent = profitMinusOneFiveFirstTeam.toFixed(2);

   profitKefJMod.textContent = profitMinusOneFiveFirstTeam.toFixed(2);
  
  
  
   //2(-1,5)
   const awayMinusOneFive = document.querySelector('.away-minusOneFive');
   awayMinusOneFive.textContent = minusOneSecondTeam.toFixed(2) + ' %';
   const profitKefK = document.querySelector('.away-minusOneFive-profit');

   const awayMinusOneFiveMod = document.querySelector('.away-minusOneFive_mod');
   awayMinusOneFiveMod.textContent = minusOneSecondTeam.toFixed(2) + ' %';
   const profitKefKMod = document.querySelector('.away-minusOneFive-profit_mod');
  
   const profitMinusOneFiveSecondTeam = 1.15/(minusOneSecondTeam/100);
   profitKefK.textContent = profitMinusOneFiveSecondTeam.toFixed(2);
   profitKefKMod.textContent = profitMinusOneFiveSecondTeam.toFixed(2);
  
   //1(-2)
   const minusTwoFirstTeam = threeNull+fourNull+fourOne+fiveNull+fiveOne+fiveTwo+sixNull+sixOne+sixTwo+sixThree+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour;
   const homeMinusTwo = document.querySelector('.home-minusTwo');
//    homeMinusTwo.textContent = minusTwoFirstTeam.toFixed(2) + ' %';
   const profitKefL = document.querySelector('.home-minusTwo-profit');
   
   const profitMinusTwoFirstTeam = 1.15/(minusTwoFirstTeam/100);
//    profitKefL.textContent = profitMinusTwoFirstTeam.toFixed(2);
  
   //2(-2)
   const minusTwoSecondTeam = nullThree+nullFour+oneFour+nullFive+oneFive+twoFive+nullSix+oneSix+twoSix+threeSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven;
   const awayMinusTwo = document.querySelector('.away-minusTwo');
//    awayMinusTwo.textContent = minusTwoSecondTeam.toFixed(2) + ' %';
   const profitKefM = document.querySelector('.away-minusTwo-profit');
   
   const profitMinusTwoSecondTeam = 1.15/(minusTwoSecondTeam/100);
//    profitKefM.textContent = profitMinusTwoSecondTeam.toFixed(2);
  
   //1(-2.5)
   const minusTwoFiveFirstTeam = threeNull+fourNull+fourOne+fiveNull+fiveOne+fiveTwo+sixNull+sixOne+sixTwo+sixThree+sevenNull+sevenOne+sevenTwo+sevenThree+sevenFour;
   const homeMinusTwoFive= document.querySelector('.home-minusTwoFive');
   homeMinusTwoFive.textContent = minusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefN = document.querySelector('.home-minusTwoFive-profit');

   const homeMinusTwoFiveMod = document.querySelector('.home-minusTwoFive_mod');
   homeMinusTwoFiveMod.textContent = minusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefNMod = document.querySelector('.home-minusTwoFive-profit_mod');
   
   const profitMinusTwoFiveFirstTeam = 1.15/(minusTwoFiveFirstTeam/100);
   profitKefN.textContent = profitMinusTwoFiveFirstTeam.toFixed(2);

   profitKefNMod.textContent = profitMinusTwoFiveFirstTeam.toFixed(2);
  
   //2(-2.5)
   const minusTwoFiveSecondTeam = nullThree+nullFour+oneFour+nullFive+oneFive+twoFive+nullSix+oneSix+twoSix+threeSix+nullSeven+oneSeven+twoSeven+threeSeven+fourSeven;
   const awayMinusTwoFive = document.querySelector('.away-minusTwoFive');
   awayMinusTwoFive.textContent = minusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefO = document.querySelector('.away-minusTwoFive-profit');
   
   const awayMinusTwoFiveMod = document.querySelector('.away-minusTwoFive_mod');
   awayMinusTwoFiveMod.textContent = minusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefOMod = document.querySelector('.away-minusTwoFive-profit_mod');

   const profitMinusTwoFiveSecondTeam = 1.15/(minusTwoFiveSecondTeam/100);
   profitKefO.textContent = profitMinusTwoFiveSecondTeam.toFixed(2);
   profitKefOMod.textContent = profitMinusTwoFiveSecondTeam.toFixed(2);
  
   //1(+1)
   const plusOneFirstTeam = winHomeTeam+drawHomeAway;
   const homePlusOne = document.querySelector('.home-plusOne');
//    homePlusOne.textContent = plusOneFirstTeam.toFixed(2) + ' %';
   const profitKefP = document.querySelector('.home-plusOne-profit');
   
   const profitPlusOneFirstTeam = 1.15/(plusOneFirstTeam/100);
//    profitKefP.textContent = profitPlusOneFirstTeam.toFixed(2);
  
   //2(+1)
   const plusOneSecondTeam = winAwayTeam+drawHomeAway;
   const awayPlusOne = document.querySelector('.away-plusOne');
//    awayPlusOne.textContent = plusOneSecondTeam.toFixed(2) + ' %';
   const profitKefQ = document.querySelector('.away-plusOne-profit');
   
   const profitPlusOneSecondTeam = 1.15/(plusOneSecondTeam/100);
//    profitKefQ.textContent = profitPlusOneSecondTeam.toFixed(2);
  
   //1(+1.5)
   const plusOneFiveFirstTeam = winHomeTeam+drawHomeAway+nullOne+oneTwo+twoThree+threeFour+fourFive+fiveSix+sixSeven;
   const homePlusOneFive = document.querySelector('.home-plusOneFive');
   homePlusOneFive.textContent = plusOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefR = document.querySelector('.home-plusOneFive-profit');

   const homePlusOneFiveMod = document.querySelector('.home-plusOneFive_mod');
   homePlusOneFiveMod.textContent = plusOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefRMod = document.querySelector('.home-plusOneFive-profit_mod');
   
   const profitPlusOneFiveFirstTeam = 1.15/(plusOneFiveFirstTeam/100);
   profitKefR.textContent = profitPlusOneFiveFirstTeam.toFixed(2);

   profitKefRMod.textContent = profitPlusOneFiveFirstTeam.toFixed(2);
  
   //2(+1.5)
   const plusOneFiveSecondTeam = winAwayTeam+drawHomeAway+oneNull+twoOne+threeTwo+fourThree+fiveFour+sixFive+sevenSix;
   const awayPlusOneFive= document.querySelector('.away-plusOneFive');
   awayPlusOneFive.textContent = plusOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefS = document.querySelector('.away-plusOneFive-profit');

   const awayPlusOneFiveMod = document.querySelector('.away-plusOneFive_mod');
   awayPlusOneFiveMod.textContent = plusOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefSMod = document.querySelector('.away-plusOneFive-profit_mod');
   
   const profitPlusOneFiveSecondTeam = 1.15/(plusOneFiveSecondTeam/100);
   profitKefS.textContent = profitPlusOneFiveSecondTeam.toFixed(2);
   profitKefSMod.textContent = profitPlusOneFiveSecondTeam.toFixed(2);
  
   //1(+2)
   const plusTwoFirstTeam = winHomeTeam+drawHomeAway+nullOne+oneTwo+twoThree+threeFour+fourFive+fiveSix+sixSeven;
   const homePlusTwo = document.querySelector('.home-plusTwo');
//    homePlusTwo.textContent = plusTwoFirstTeam.toFixed(2) + ' %';
   const profitKefT = document.querySelector('.home-plusTwo-profit');
   
   const profitPlusTwoFirstTeam = 1.15/(plusTwoFirstTeam/100);
//    profitKefT.textContent = profitPlusTwoFirstTeam.toFixed(2);
  
   //2(+2)
   const plusTwoSecondTeam = winAwayTeam+drawHomeAway+oneNull+twoOne+threeTwo+fourThree+fiveFour+sixFive+sevenSix;
   const awayPlusTwo = document.querySelector('.away-plusTwo');
//    awayPlusTwo.textContent = plusTwoSecondTeam.toFixed(2) + ' %';
   const profitKefU = document.querySelector('.away-plusTwo-profit');
   
   const profitPlusTwoSecondTeam = 1.15/(plusTwoSecondTeam/100);
//    profitKefU.textContent = profitPlusTwoSecondTeam.toFixed(2);
  
   //1(+2.5)
   const plusTwoFiveFirstTeam = winHomeTeam+drawHomeAway+nullOne+oneTwo+twoThree+threeFour+fourFive+fiveSix+sixSeven+nullTwo+oneThree+twoFour+threeFive+fourSix+fiveSeven;
   const homePlusTwoFive = document.querySelector('.home-plusTwoFive');
   homePlusTwoFive.textContent = plusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefV = document.querySelector('.home-plusTwoFive-profit');

   const homePlusTwoFiveMod = document.querySelector('.home-plusTwoFive_mod');
   homePlusTwoFiveMod.textContent = plusTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefVMod = document.querySelector('.home-plusTwoFive-profit_mod');
   
   const profitPlusTwoFiveFirstTeam = 1.15/(plusTwoFiveFirstTeam/100);
   profitKefV.textContent = profitPlusTwoFiveFirstTeam.toFixed(2);

   profitKefVMod.textContent = profitPlusTwoFiveFirstTeam.toFixed(2);
  
   //2(+2.5)
   const plusTwoFiveSecondTeam = winAwayTeam+drawHomeAway+oneNull+twoOne+threeTwo+fourThree+fiveFour+sixFive+sevenSix+twoNull+threeOne+fourTwo+fiveThree+sixFour+sevenFive;
   const awayPlusTwoFive = document.querySelector('.away-plusTwoFive');
   awayPlusTwoFive.textContent = plusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefW = document.querySelector('.away-plusTwoFive-profit');

   const awayPlusTwoFiveMod = document.querySelector('.away-plusTwoFive_mod');
   awayPlusTwoFiveMod.textContent = plusTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefWMod = document.querySelector('.away-plusTwoFive-profit_mod');
   
   const profitPlusTwoFiveSecondTeam = 1.15/(plusTwoFiveSecondTeam/100);
   profitKefW.textContent = profitPlusTwoFiveSecondTeam.toFixed(2);
   profitKefWMod.textContent = profitPlusTwoFiveSecondTeam.toFixed(2);
  
   //Total more 0.5
   const totalNullFiveFirstTeam = (winHomeTeam+(drawHomeAway-nullNull)+winAwayTeam);
   const totalMoreNullFive = document.querySelector('.totalMore-nullFive');
   totalMoreNullFive.textContent = totalNullFiveFirstTeam.toFixed(2) + ' %';
   const profitKefX = document.querySelector('.totalMore-nullFive-profit');

   const totalMoreNullFiveMod = document.querySelector('.totalMore-nullFive_mod');
   totalMoreNullFiveMod.textContent = totalNullFiveFirstTeam.toFixed(2) + ' %';
   const profitKefXMod = document.querySelector('.totalMore-nullFive-profit_mod');
   
   const profitTotalNullFiveFirstTeam = 1.15/(totalNullFiveFirstTeam/100);
   profitKefX.textContent = profitTotalNullFiveFirstTeam.toFixed(2);

   profitKefXMod.textContent = profitTotalNullFiveFirstTeam.toFixed(2);
  
   //Total less 0.5
   const totalNullFiveSecondTeam = 100-totalNullFiveFirstTeam;
   const totalLessNullFive = document.querySelector('.totalLess-nullFive');
   totalLessNullFive.textContent = totalNullFiveSecondTeam.toFixed(2) + ' %';
   const profitKefY = document.querySelector('.totalLess-nullFive-profit');

   const totalLessNullFiveMod = document.querySelector('.totalLess-nullFive_mod');
   totalLessNullFiveMod.textContent = totalNullFiveSecondTeam.toFixed(2) + ' %';
   const profitKefYMod = document.querySelector('.totalLess-nullFive-profit_mod');
   
   const profitTotalNullFiveSecondTeam = 1.15/(totalNullFiveSecondTeam/100);
   profitKefY.textContent = profitTotalNullFiveSecondTeam.toFixed(2);
   profitKefYMod.textContent = profitTotalNullFiveSecondTeam.toFixed(2);
  
   //Total more 1
   const totalOneFirstTeam = oneOne+twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+twoNull+threeNull+fourNull+fiveNull+sixNull+sevenNull+nullTwo+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreOne = document.querySelector('.totalMore-one');
//    totalMoreOne.textContent = totalOneFirstTeam.toFixed(2) + ' %';
   const profitKefZ = document.querySelector('.totalMore-one-profit');
   
   const profitTotalOneFirstTeam = 1.15/(totalOneFirstTeam/100);
//    profitKefZ.textContent = profitTotalOneFirstTeam.toFixed(2);
  
   //Total less 1
   const totalOneSecondTeam = 100-totalOneFirstTeam;
   const totalLessOne = document.querySelector('.totalLess-one');
//    totalLessOne.textContent = totalOneSecondTeam.toFixed(2) + ' %';
   const profitKefAA = document.querySelector('.totalLess-one-profit');
  
   const profitTotalOneSecondTeam = 1.15/(totalOneSecondTeam/100);
//    profitKefAA.textContent = profitTotalOneSecondTeam.toFixed(2);
  
   //Total more 1.5
   const totalOneFiveFirstTeam = oneOne+twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+twoNull+threeNull+fourNull+fiveNull+sixNull+sevenNull+nullTwo+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreOneFive = document.querySelector('.totalMore-oneFive');
   totalMoreOneFive.textContent = totalOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefBB = document.querySelector('.totalMore-oneFive-profit');

   const totalMoreOneFiveMod = document.querySelector('.totalMore-oneFive_mod');
   totalMoreOneFiveMod.textContent = totalOneFiveFirstTeam.toFixed(2) + ' %';
   const profitKefBBMod = document.querySelector('.totalMore-oneFive-profit_mod');
   
   const profitTotalOneFiveFirstTeam = 1.15/(totalOneFiveFirstTeam/100);
   profitKefBB.textContent = profitTotalOneFiveFirstTeam.toFixed(2);

   profitKefBBMod.textContent = profitTotalOneFiveFirstTeam.toFixed(2);
  
   //Total less 1.5
   const totalOneFiveSecondTeam = 100-totalOneFiveFirstTeam;
   const totalLessOneFive = document.querySelector('.totalLess-oneFive');
   totalLessOneFive.textContent = totalOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefCC = document.querySelector('.totalLess-oneFive-profit');

   const totalLessOneFiveMod = document.querySelector('.totalLess-oneFive_mod');
   totalLessOneFiveMod.textContent = totalOneFiveSecondTeam.toFixed(2) + ' %';
   const profitKefCCMod = document.querySelector('.totalLess-oneFive-profit_mod');
  
   const profitTotalOneFiveSecondTeam = 1.15/(totalOneFiveSecondTeam/100);
   profitKefCC.textContent = profitTotalOneFiveSecondTeam.toFixed(2);
   profitKefCCMod.textContent = profitTotalOneFiveSecondTeam.toFixed(2);
  
   //Total more 2
   const totalTwoFirstTeam = twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+threeNull+fourNull+fiveNull+sixNull+sevenNull+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreTwo = document.querySelector('.totalMore-two');
//    totalMoreTwo.textContent = totalTwoFirstTeam.toFixed(2) + ' %';
   const profitKefEE = document.querySelector('.totalMore-two-profit');
   
   const profitTotalTwoFirstTeam = 1.15/(totalTwoFirstTeam/100);
//    profitKefEE.textContent = profitTotalTwoFirstTeam.toFixed(2);
  
   //Total less 2
   const totalTwoSecondTeam = 100-totalTwoFirstTeam;
   const totalLessTwo = document.querySelector('.totalLess-two');
//    totalLessTwo.textContent = totalTwoSecondTeam.toFixed(2) + ' %';
   const profitKefFF = document.querySelector('.totalLess-two-profit');
  
   const profitTotalTwoSecondTeam = 1.15/(totalTwoSecondTeam/100);
//    profitKefFF.textContent = profitTotalTwoSecondTeam.toFixed(2);
  
   //Total more 2.5
   const totalTwoFiveFirstTeam = twoOne+threeOne+fourOne+fiveOne+sixOne+sevenOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+threeNull+fourNull+fiveNull+sixNull+sevenNull+
   nullThree+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreTwoFive = document.querySelector('.totalMore-twoFive');
   totalMoreTwoFive.textContent = totalTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefGG = document.querySelector('.totalMore-twoFive-profit');

   const totalMoreTwoFiveMod = document.querySelector('.totalMore-twoFive_mod');
   totalMoreTwoFiveMod.textContent = totalTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefGGMod = document.querySelector('.totalMore-twoFive-profit_mod');
   
   const profitTotalTwoFiveFirstTeam = 1.15/(totalTwoFiveFirstTeam/100);
   profitKefGG.textContent = profitTotalTwoFiveFirstTeam.toFixed(2);

   profitKefGGMod.textContent = profitTotalTwoFiveFirstTeam.toFixed(2);

   const totalMoreTwoFiveModTitle = document.querySelector('.totalMore-twoFive_mod-title');
   totalMoreTwoFiveModTitle.textContent = totalTwoFiveFirstTeam.toFixed(2) + ' %';
   const profitKefGGModTitle = document.querySelector('.totalMore-twoFive-profit_mod-title');
   profitKefGGModTitle.textContent = profitTotalTwoFiveFirstTeam.toFixed(2);
  
   //Total less 2.5
   const totalTwoFiveSecondTeam = 100-totalTwoFiveFirstTeam;
   const totalLessTwoFive = document.querySelector('.totalLess-twoFive');
   totalLessTwoFive.textContent = totalTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefHH = document.querySelector('.totalLess-twoFive-profit');

   const totalLessTwoFiveMod = document.querySelector('.totalLess-twoFive_mod');
   totalLessTwoFiveMod.textContent = totalTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefHHMod = document.querySelector('.totalLess-twoFive-profit_mod');
  
   const profitTotalTwoFiveSecondTeam = 1.15/(totalTwoFiveSecondTeam/100);
   profitKefHH.textContent = profitTotalTwoFiveSecondTeam.toFixed(2);
   profitKefHHMod.textContent = profitTotalTwoFiveSecondTeam.toFixed(2);
  
   const totalLessTwoFiveModTitle = document.querySelector('.totalLess-twoFive_mod-title');
   totalLessTwoFiveModTitle.textContent = totalTwoFiveSecondTeam.toFixed(2) + ' %';
   const profitKefHHModTitle = document.querySelector('.totalLess-twoFive-profit_mod-title');
   profitKefHHModTitle.textContent = profitTotalTwoFiveSecondTeam.toFixed(2);
   //Total more 3
   const totalThreeFirstTeam = threeOne+fourOne+fiveOne+sixOne+sevenOne+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fourNull+fiveNull+sixNull+sevenNull+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreThree = document.querySelector('.totalMore-three');
//    totalMoreThree.textContent = totalThreeFirstTeam.toFixed(2) + ' %';
   const profitKefII = document.querySelector('.totalMore-three-profit');
   
   const profitTotalThreeFirstTeam = 1.15/(totalThreeFirstTeam/100);
//    profitKefII.textContent = profitTotalThreeFirstTeam.toFixed(2);
  
   //Total less 3
   const totalThreeSecondTeam = 100-totalThreeFirstTeam;
   const totalLessThree = document.querySelector('.totalLess-three');
//    totalLessThree.textContent = totalThreeSecondTeam.toFixed(2) + ' %';
   const profitKefJJ = document.querySelector('.totalLess-three-profit');
  
   const profitTotalThreeSecondTeam = 1.15/(totalThreeSecondTeam/100);
//    profitKefJJ.textContent = profitTotalThreeSecondTeam.toFixed(2);
   
   //Total more 3.5
   const totalThreeFiveFirstTeam = threeOne+fourOne+fiveOne+sixOne+sevenOne+oneThree+oneFour+oneFive+oneSix+oneSeven+twoTwo+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fourNull+fiveNull+sixNull+sevenNull+nullFour+nullFive+nullSix+nullSeven;
   const totalMoreThreeFive = document.querySelector('.totalMore-threeFive');
   totalMoreThreeFive.textContent = totalThreeFiveFirstTeam.toFixed(2) + ' %';
   const profitKefTF = document.querySelector('.totalMore-threeFive-profit');

   const totalMoreThreeFiveMod = document.querySelector('.totalMore-threeFive_mod');
   totalMoreThreeFiveMod.textContent = totalThreeFiveFirstTeam.toFixed(2) + ' %';
   const profitKefTFMod = document.querySelector('.totalMore-threeFive-profit_mod');
   
   const profitTotalThreeFiveFirstTeam = 1.15/(totalThreeFiveFirstTeam/100);
   profitKefTF.textContent = profitTotalThreeFiveFirstTeam.toFixed(2);
   profitKefTFMod.textContent = profitTotalThreeFiveFirstTeam.toFixed(2);
  
   //Total less 3.5
   const totalThreeFiveSecondTeam = 100-totalThreeFiveFirstTeam;
   const totalLessThreeFive = document.querySelector('.totalLess-threeFive');
   totalLessThreeFive.textContent = totalThreeFiveSecondTeam.toFixed(2) + ' %';
   const profitKefLTF = document.querySelector('.totalLess-threeFive-profit');

   const totalLessThreeFiveMod = document.querySelector('.totalLess-threeFive_mod');
   totalLessThreeFiveMod.textContent = totalThreeFiveSecondTeam.toFixed(2) + ' %';
   const profitKefLTFMod = document.querySelector('.totalLess-threeFive-profit_mod');
  
   const profitTotalThreeFiveSecondTeam = 1.15/(totalThreeFiveSecondTeam/100);
   profitKefLTF.textContent = profitTotalThreeFiveSecondTeam.toFixed(2);
   profitKefLTFMod.textContent = profitTotalThreeFiveSecondTeam.toFixed(2);

   //Total more 4
   const totalMoreFourTeam = fourOne+fiveOne+sixOne+sevenOne+oneFour+oneFive+oneSix+oneSeven+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fourNull+fiveNull+sixNull+sevenNull+nullFive+nullSix+nullSeven;
   const totalMoreFour = document.querySelector('.totalMore-four');
//    totalMoreFour.textContent = totalMoreFourTeam.toFixed(2) + ' %';
   const profitTotalMoreFour = document.querySelector('.totalMOre-four-profit');

   const profitTotalMoreFourTeam =1.15/(totalMoreFourTeam/100);
//    profitTotalMoreFour.textContent = profitTotalMoreFourTeam.toFixed(2);

   //Total less 4
   const totalLessFourTeam = 100-totalMoreFourTeam;
   const totalLessFour = document.querySelector('.totalLess-four');
//    totalLessFour.textContent = totalLessFourTeam.toFixed(2) + ' %';
   const profitKefTLF = document.querySelector('.totalLess-four-profit');

   const profitTotalLessFourTeam = 1.15/(totalLessFourTeam/100);
//    profitKefTLF.textContent = profitTotalLessFourTeam.toFixed(2);

   //Total more 4.5
   const totalMoreFourFiveTeam = fourOne+fiveOne+sixOne+sevenOne+oneFour+oneFive+oneSix+oneSeven+
   twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+fiveNull+sixNull+sevenNull+nullFive+nullSix+nullSeven;
   const totalMoreFourFive = document.querySelector('.totalMore-fourFive');
   totalMoreFourFive.textContent = totalMoreFourFiveTeam.toFixed(2) + ' %';
   const profitTotalMoreFourFive = document.querySelector('.totalMore-fourFive-profit');

   const totalMoreFourFiveMod = document.querySelector('.totalMore-fourFive_mod');
   totalMoreFourFiveMod.textContent = totalMoreFourFiveTeam.toFixed(2) + ' %';
   const profitTotalMoreFourFiveMod = document.querySelector('.totalMore-fourFive-profit_mod');

   const profitTotalMoreFourFiveTeam =1.15/(totalMoreFourFiveTeam/100);
   profitTotalMoreFourFive.textContent = profitTotalMoreFourFiveTeam.toFixed(2);
   profitTotalMoreFourFiveMod.textContent = profitTotalMoreFourFiveTeam.toFixed(2);

   //Total less 4.5
   const totalLessFourFiveTeam = 100-totalMoreFourFiveTeam;
   const totalLessFourFive = document.querySelector('.totalLess-fourFive');
   totalLessFourFive.textContent = totalLessFourFiveTeam.toFixed(2) + ' %';
   const profitKefTLFF = document.querySelector('.totalLess-fourFive-profit');

   const totalLessFourFiveMod = document.querySelector('.totalLess-fourFive_mod');
   totalLessFourFiveMod.textContent = totalLessFourFiveTeam.toFixed(2) + ' %';
   const profitKefTLFFMod = document.querySelector('.totalLess-fourFive-profit_mod');

   const profitTotalLessFourFiveTeam = 1.15/(totalLessFourFiveTeam/100);
   profitKefTLFF.textContent = profitTotalLessFourFiveTeam.toFixed(2);

   profitKefTLFFMod.textContent = profitTotalLessFourFiveTeam.toFixed(2);


   //Total more 5
   const totalMoreFiveTeam = fiveOne+sixOne+sevenOne+oneFive+oneSix+oneSeven+twoFour+twoFive+twoSix+twoSeven+fourTwo+fiveTwo+sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+
   threeSeven+fourThree+fiveThree+sixThree+sevenThree+fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+
   fiveSix+fiveSeven+sixFive+sevenFive+sixSix+sixSeven+sevenSix+sevenSeven+sixNull+sevenNull+nullSix+nullSeven;
   const totalMoreFive = document.querySelector('.totalMore-five');
//    totalMoreFive.textContent = totalMoreFiveTeam.toFixed(2) + ' %';
   const profitTotalMoreFive = document.querySelector('.totalMore-five-profit');

   const profitTotalMoreFiveTeam =1.15/(totalMoreFiveTeam/100);
//    profitTotalMoreFive.textContent = profitTotalMoreFiveTeam.toFixed(2);

   //Total less 5
   const totalLessFiveTeam = 100-totalMoreFiveTeam;
   const totalLessFive = document.querySelector('.totalLess-five');
//    totalLessFive.textContent = totalLessFiveTeam.toFixed(2) + ' %';
   const profitKefTLFiv = document.querySelector('.totalLess-five-profit');

   const profitTotalLessFiveTeam = 1.15/(totalLessFiveTeam/100);
//    profitKefTLFiv.textContent = profitTotalLessFiveTeam.toFixed(2);

   //All scored
   const allScoredTeam = oneOne+oneTwo+oneThree+oneFour+oneFive+oneSix+oneSeven+twoOne+threeOne+fourOne+
   fiveOne+sixOne+sevenOne+twoTwo+twoThree+twoFour+twoFive+twoSix+twoSeven+threeTwo+fourTwo+fiveTwo+
   sixTwo+sevenTwo+threeThree+threeFour+threeFive+threeSix+threeSeven+fourThree+fiveThree+sixThree+sevenThree+
   fourFour+fourFive+fourSix+fourSeven+fiveFour+sixFour+sevenFour+fiveFive+fiveSix+fiveSeven+sixFive+
   sevenFive+sixSix+sixSeven+sevenSix+sevenSeven;
   const allScored = document.querySelector('.allScored');
   allScored.textContent = allScoredTeam.toFixed(2) + ' %';
   const profitAllScored = document.querySelector('.allScored-profit');

   const allScoredMod = document.querySelector('.allScored_mod');
   allScoredMod.textContent = allScoredTeam.toFixed(2) + ' %';
   const profitAllScoredMod = document.querySelector('.allScored-profit_mod');

   const profitAllScoredTeam = 1.15/(allScoredTeam/100);
   profitAllScored.textContent = profitAllScoredTeam.toFixed(2);
   profitAllScoredMod.textContent = profitAllScoredTeam.toFixed(2);

   const allScoredModTitle = document.querySelector('.allScored_mod-title');
   allScoredModTitle.textContent = allScoredTeam.toFixed(2) + ' %';
   const profitAllScoredModTitle = document.querySelector('.allScored-profit_mod-title');
   profitAllScoredModTitle.textContent = profitAllScoredTeam.toFixed(2);

   //Not all scored
   const notAllScoredTeam = 100-allScoredTeam;
   const notAllScored = document.querySelector('.notAllScored');
   notAllScored.textContent = notAllScoredTeam.toFixed(2) + ' %';
   const profitNotAllScored = document.querySelector('.notAllScored-profit');

   const notAllScoredMod = document.querySelector('.notAllScored_mod');
   notAllScoredMod.textContent = notAllScoredTeam.toFixed(2) + ' %';
   const profitNotAllScoredMod = document.querySelector('.notAllScored-profit_mod');

   const profitNotAllScoredTeam = 1.15/(notAllScoredTeam/100);
   profitNotAllScored.textContent = profitNotAllScoredTeam.toFixed(2);
   profitNotAllScoredMod.textContent = profitNotAllScoredTeam.toFixed(2);

   const notAllScoredModTitle = document.querySelector('.notAllScored_mod-title');
   notAllScoredModTitle.textContent = notAllScoredTeam.toFixed(2) + ' %';
   const profitNotAllScoredModTitle = document.querySelector('.notAllScored-profit_mod-title');
   profitNotAllScoredModTitle.textContent = profitNotAllScoredTeam.toFixed(2);
    }
  

function Fixed( s, wid, dec ) {
    var z = 1
    if (dec > 0) {
        z /= Math.pow( 10, dec );
        if (s < -z)  s -= 0.5 * z;
        else
            if (s > z)  s += 0.5 * z;
            else
              s = 0;
           }
      
    s = "" + s;
      
    var neg = 0;
    if (s.charAt(0) == "-") {
        neg = 2;
        s = s.substring( 1, s.length );
        }
      
    var exp = "";
    var e = s.lastIndexOf( "E" );
    if (e < 0)  e = s.lastIndexOf( "e" );
    if (e > -1) {
        exp = s.substring( e, s.length );
        s = s.substring( 0, e );
        }
      
    var dp = s.indexOf( ".", 0 );
    if (dp == -1) {
        dp = s.length;
        if (dec > 0) {
            s += ".";
            dp = s.length - 1;
            }
        }
      
    if (dp == 0) {
        s = '0' + s;
        dp = 1;
        }
      
    while ((dec > 0) && ((s.length - dp - 1) < dec))
        s += "0";
      
    var places = s.length - dp - 1;
    if (places > dec)
        if (dec == 0)
            s = s.substring( 0, dp );
        else
            s = s.substring( 0, dp + dec + 1 );
      
    s += exp;
      
    if (neg > 0)
        s = "-" + s;
      
    while (s.length < wid)
        s = " " + s;
      
    return s
    }
      
        
        
        
    function DoPoi( aform ) {
    var u = PosV(parseFloat(aform.u.value));
    aform.u.value = Fixed(u,10,4);
    var k = PosV(parseInt(aform.k.value));
    aform.k.value = Fixed(k,8,0);
    aform.tnk.value = Fixed(PoissonTerm( u, k ),8,4);
    var t = PoissonP( u, k );
    aform.puk.value = Fixed(t,8,4);
    aform.quk.value = Fixed(1-t,8,4);
    }
      
        
    function PoissonTerm( u, k ) {
       
    return  Math.exp( (k * Math.log(u)) - u - LnFact(k) );
    }
      
        
    function LnFact( x ) {
      
    if (x <= 1)  x = 1;
      
    if (x < 12)
        return Math.log( Fact(Math.round(x)) );
    else {
        var invx = 1 / x;
        var invx2 = invx * invx;
        var invx3 = invx2 * invx;
        var invx5 = invx3 * invx2;
        var invx7 = invx5 * invx2;
      
        var sum = ((x + 0.5) * Math.log(x)) - x;
        sum += Math.log(2*Math.PI) / 2;
        sum += (invx / 12) - (invx3 / 360);
        sum += (invx5 / 1260) - (invx7 / 1680);
      
        return sum;
        }
    }
      
    function Fact( x ) {
    var  t=1;
    while (x > 1)
        t *= x--;
    return t;
    }
      
        
    function PosV( x ) {
    if (x < 0)  x = -x;
    return x;
    }



////////////////////////////////////Выбор лиги для хозяев////////////////////////////////////
    function showNameTeam () {
      const selectLeagueValue = document.formMath.selectLeague.value;
      const homeListValue = Number.parseInt(selectLeagueValue)
      
      
      if (homeListValue===1) {
          document.querySelector('.container__selectNameHome').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'flex';

// скрываем инпуты с дургими лигами
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';

      }
      if (homeListValue===2) {
         document.querySelector('.container__selectName_Cship').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'flex';
         // скрываем инпуты с дургими лигами
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
         
      }

      if (homeListValue===3) {
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'flex';
         // скрываем инпуты с дургими лигами
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }

      if (homeListValue===4) {
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'flex';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }

      if (homeListValue===5) {
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'flex';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }

      if (homeListValue===6) {
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'flex';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }
      if (homeListValue===7) {
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'flex';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }
      if (homeListValue===8) {
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'flex';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }
      if (homeListValue===9) {
         document.querySelector('.container__selectNameHome-League1').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'flex';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }
      if (homeListValue===10) {
         document.querySelector('.container__selectNameHome-League2').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'flex';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'none';
      }
      if (homeListValue===11) {
         document.querySelector('.container__selectNameHome-Primeira').style.display = 'flex';
         document.querySelector('.container__choise-title_modnone-Primeira').style.display = 'flex';
         document.querySelector('.container__selectNameHome-League2').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League2').style.display = 'none';
         document.querySelector('.container__selectNameHome-League1').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-League1').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaB').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaB').style.display = 'none';
         document.querySelector('.container__selectNameHome-SeriaA').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-SeriaA').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLigaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-LaLiga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-LaLiga').style.display = 'none';
         document.querySelector('.container__selectNameHome-BundesligaTwo').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesligaTwo').style.display = 'none';
         document.querySelector('.container__selectNameHome-Bundesliga').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-bundesliga').style.display = 'none';
         document.querySelector('.container__selectNameHome').style.display = 'none';
         document.querySelector('.container__choise-title_modnone-apl').style.display = 'none';
         document.querySelector('.container__selectName_Cship').style.display = 'none';
         document.querySelector('.container__choise-title_modnone_cship').style.display = 'none';
      }
    }

    leagueHome.addEventListener('change', () => {
      showNameTeam();
   })


   ////////////////////////////////////////Выбор команд для хозяев
function showTeamHome() {
   const selectNameHome = document.formMath.selectNameHome.value
   const selectNameHomeValue = Number.parseInt(selectNameHome);

   if (selectNameHomeValue===511000000) {
      teamVsHome.textContent = "Арсенал";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/arsenal.png');
      teamVsHomeMod.textContent = "Арсенал";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/arsenal.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===426500000) {
      teamVsHome.textContent = "Астон Вилла";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/aston.png');
      teamVsHomeMod.textContent = "Астон Вилла";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/aston.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===145000000) {
      teamVsHome.textContent = "Бёрнли";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/bernly.png');
      teamVsHomeMod.textContent = "Бёрнли";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/bernly.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===239900000) {
      teamVsHome.textContent = "Брайтон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/braiton.png');
      teamVsHomeMod.textContent = "Брайтон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/braiton.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===218900000) {
      teamVsHome.textContent = "Брентфорд";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/brent.png');
      teamVsHomeMod.textContent = "Брентфорд";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/brent.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===350750000) {
      teamVsHome.textContent = "Вест Хэм";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/westham.png');
      teamVsHomeMod.textContent = "Вест Хэм";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/westham.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===338500000) {
      teamVsHome.textContent = "Вулверхэмптон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/wolvs.png');
      teamVsHomeMod.textContent = "Вулверхэмптон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/wolvs.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===239950000) {
      teamVsHome.textContent = "Кристалл Пэлас";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/crispel.png');
      teamVsHomeMod.textContent = "Кристалл Пэлас";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/crispel.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===513800000) {
      teamVsHome.textContent = "Лестер";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/lester.png');
      teamVsHomeMod.textContent = "Лестер";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/lester.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===889000000) {
      teamVsHome.textContent = "Ливерпуль";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/liverpool.png');
      document.querySelector('.line__teamVs-home_mod').textContent = "Ливерпуль"
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/liverpool.png')
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===265000000) {
      teamVsHome.textContent = "Лидс";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/leads.png');
      teamVsHomeMod.textContent = "Лидс";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/leads.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===991300000) {
      teamVsHome.textContent = "Ман Сити";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/mancity.png');
      teamVsHomeMod.textContent = "Ман Сити";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/mancity.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeValue===790250000) {
      teamVsHome.textContent = "Ман Юнайтед";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/manun.png');
      teamVsHomeMod.textContent = "Ман Юнайтед";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/manun.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeValue===155550000) {
      teamVsHome.textContent = "Норвич";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/norvich.png');
      teamVsHomeMod.textContent = "Норвич";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/norvich.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeValue===278400000) {
      teamVsHome.textContent = "Ньюкасл";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/new.png');
      teamVsHomeMod.textContent = "Ньюкасл";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/new.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeValue===246750000) {
      teamVsHome.textContent = "Саутгемптон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/sauth.png');
      teamVsHomeMod.textContent = "Саутгемптон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/sauth.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeValue===580250000) {
      teamVsHome.textContent = "Тоттенхэм";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/tott.png');
      teamVsHomeMod.textContent = "Тоттенхэм";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/tott.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeValue===143600000) {
      teamVsHome.textContent = "Уотфорд";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/watford.png');
      teamVsHomeMod.textContent = "Уотфорд";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/watford.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeValue===883000000) {
      teamVsHome.textContent = "Челси";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/chelsey.png');
      teamVsHomeMod.textContent = "Челси";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/chelsey.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeValue===463750000) {
      teamVsHome.textContent = "Эвертон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/APL/everton.png');
      teamVsHomeMod.textContent = "Эвертон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/APL/everton.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   ////////Чемпионшип/////

   
}
NameHome.addEventListener('change', () => {
   showTeamHome();
})

function showChShip () {
   const selectNameChip = document.formMath.selectNameChip.value
   const selectNameChipValue = Number.parseInt(selectNameChip);

   if (selectNameChipValue===28550000) {
      teamVsHome.textContent = "Барнсли";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/barnsley.png');
      teamVsHomeMod.textContent = "Барнсли";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/barnsley.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===36300000) {
      teamVsHome.textContent = "Бирмингем";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/birming.png');
      teamVsHomeMod.textContent = "Бирмингем";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/birming.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===47800000) {
      teamVsHome.textContent = "Блэкберн";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/blackburn.png');
      teamVsHomeMod.textContent = "Блэкберн";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/blackburn.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===13050000) {
      teamVsHome.textContent = "Блэкпул";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/blackpool.png');
      teamVsHomeMod.textContent = "Блэкпул";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/blackpool.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===169600000) {
      teamVsHome.textContent = "Борнмут";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/bornmut.png');
      teamVsHomeMod.textContent = "Борнмут";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/bornmut.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===33900000) {
      teamVsHome.textContent = "Бристоль";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/bristol.png');
      teamVsHomeMod.textContent = "Бристоль";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/bristol.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===86550000) {
      teamVsHome.textContent = "Вест Бромвич";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/westBrom.png');
      teamVsHomeMod.textContent = "Вест Бромвич";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/westBrom.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===33600000) {
      teamVsHome.textContent = "Дерби Каунти";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/derbyCounty.png');
      teamVsHomeMod.textContent = "дерби Каунти";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/derbyCounty.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===31600000) {
      teamVsHome.textContent = "Кардифф";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/kardiff.png');
      teamVsHomeMod.textContent = "Кардифф";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/kardiff.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===19900000) {
      teamVsHome.textContent = "Ковентри";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/coventry.png');
      teamVsHomeMod.textContent = "Ковентри";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/coventry.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===38950000) {
      teamVsHome.textContent = "Куинз Парк Р.";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/qpr.png');
      teamVsHomeMod.textContent = "Куинз Парк Р.";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/qpr.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===20200000) {
      teamVsHome.textContent = "Лутон Таун";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/luton.png');
      teamVsHomeMod.textContent = "Лутон Таун";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/luton.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===54400000) {
      teamVsHome.textContent = "Мидлсбро";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/middlsbro.png');
      teamVsHomeMod.textContent = "Мидлсбро";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/middlsbro.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===39600000) {
      teamVsHome.textContent = "Миллуолл";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/milwall.png');
      teamVsHomeMod.textContent = "Миллуолл";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/milwall.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===58200000) {
      teamVsHome.textContent = "Ноттингем Форест";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/nottingham.png');
      teamVsHomeMod.textContent = "Ноттингем Форест";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/nottingham.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===11550000) {
      teamVsHome.textContent = "Питерборо";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/piterboro.png');
      teamVsHomeMod.textContent = "Питерборо";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/piterboro.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===34830000) {
      teamVsHome.textContent = "Престон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/preston.png');
      teamVsHomeMod.textContent = "Престон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/preston.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===37100000) {
      teamVsHome.textContent = "Рединг";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/riding.png');
      teamVsHomeMod.textContent = "Рединг";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/riding.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===58600000) {
      teamVsHome.textContent = "Сток Сити";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/stockcity.png');
      teamVsHomeMod.textContent = "Сток Сити";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/stockcity.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===38950000) {
      teamVsHome.textContent = "Суонси";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/swoncy.png');
      teamVsHomeMod.textContent = "Суонси";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/swoncy.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===147000000) {
      teamVsHome.textContent = "Фулхэм";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/fulham.png');
      teamVsHomeMod.textContent = "Фулхэм";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/fulham.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===37650000) {
      teamVsHome.textContent = "Хаддерсфилд";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/haddersfild.png');
      teamVsHomeMod.textContent = "Хаддерсфилд";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/haddersfild.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===21200000) {
      teamVsHome.textContent = "Халл Сити";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/hallcity.png');
      teamVsHomeMod.textContent = "Халл Сити";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/hallcity.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameChipValue===94100000) {
      teamVsHome.textContent = "Шеффилд Юнайтед";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Championship/sheffieldUnited.png');
      teamVsHomeMod.textContent = "Шеффилд Юнайтед";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Championship/sheffieldUnited.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

}

chemShip.addEventListener('change', () => {
   showChShip();
})

NameHome.addEventListener('change', () => {
   showTeamHome();
})

///////////////// Бундеслига дом /////////////////////

function showBundesligaHome () {
   const selectNameBundesliga = document.formMath.selectNameHomeBundesliga.value
   const selectNameBundesligaValue = Number.parseInt(selectNameBundesliga);

   if (selectNameBundesligaValue===199800000) {
      teamVsHome.textContent = "Айнтрахт";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/aintrakht.png');
      teamVsHomeMod.textContent = "Айнтрахт";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/aintrakht.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===55750000) {
      teamVsHome.textContent = "Арминия";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/arminia.png');
      teamVsHomeMod.textContent = "Арминия";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/arminia.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===98800000) {
      teamVsHome.textContent = "Аугсбург";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/augsburg.png');
      teamVsHomeMod.textContent = "Аугсбург";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/augsburg.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===815750000) {
      teamVsHome.textContent = "Бавария Мюнхен";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/bavaria.png');
      teamVsHomeMod.textContent = "Бавария Мюнхен";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/bavaria.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===417450000) {
      teamVsHome.textContent = "Байер 04";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/bayer04.png');
      teamVsHomeMod.textContent = "Байер 04";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/bayer04.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===576300000) {
      teamVsHome.textContent = "Боруссия Дортмунд";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/Dortmund.png');
      teamVsHomeMod.textContent = "Боруссия Дортмунд";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/Dortmund.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===237300000) {
      teamVsHome.textContent = "Боруссия Мёнхенг.";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/borussiaMunh.png');
      teamVsHomeMod.textContent = "Боруссия Мёнхенг.";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/borussiaMunh.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===41850000) {
      teamVsHome.textContent = "Бохум";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/bohum.png');
      teamVsHomeMod.textContent = "Бохум";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/bohum.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===18530000) {
      teamVsHome.textContent = "Вольфсбург";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/wolfsburg.png');
      teamVsHomeMod.textContent = "Вольфсбург";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/wolfsburg.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===106430000) {
      teamVsHome.textContent = "Герта Берлин";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/herta.png');
      teamVsHomeMod.textContent = "Герта Берлин";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/herta.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===29800000) {
      teamVsHome.textContent = "Гройтер Фюрт";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/groiterFurt.png');
      teamVsHomeMod.textContent = "Гройтер Фюрт";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/groiterFurt.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===75510000) {
      teamVsHome.textContent = "Кёльн";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/keln.png');
      teamVsHomeMod.textContent = "Кёльн";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/keln.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===122050000) {
      teamVsHome.textContent = "Майнц 05";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/mainz05.png');
      teamVsHomeMod.textContent = "Майн 05";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/mainz05.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===454000000) {
      teamVsHome.textContent = "РБ Лейпциг";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/leipzig.png');
      teamVsHomeMod.textContent = "РБ Лейпциг";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/leipzig.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===71600000) {
      teamVsHome.textContent = "Унион Берлин";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/unionBerlin.png');
      teamVsHomeMod.textContent = "Унион Берлин";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/unionBerlin.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===146750000) {
      teamVsHome.textContent = "Фрайбург";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/fraiburg.png');
      teamVsHomeMod.textContent = "Фрайбург";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/fraiburg.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   
   if (selectNameBundesligaValue===197450000) {
      teamVsHome.textContent = "Хоффенхайм";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/hoffenhaim.png');
      teamVsHomeMod.textContent = "Хоффенхайм";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/hoffenhaim.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaValue===182100000) {
      teamVsHome.textContent = "Штутгарт";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bundesliga/shtutgart.png');
      teamVsHomeMod.textContent = "Штутгарт";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bundesliga/shtutgart.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }


}

BundesligaHome.addEventListener('change', () => {
   showBundesligaHome();
})

/////////////// Вторая Бундеслига дом ////////////////////////

function showBundesligaTwoHome () {
   const selectNameBundesligaTwo = document.formMath.selectNameHomeBundesligaTwo.value
   const selectNameBundesligaTwoValue = Number.parseInt(selectNameBundesligaTwo);

   if (selectNameBundesligaTwoValue===39350000) {
      teamVsHome.textContent = "Вердер";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/werder.png');
      teamVsHomeMod.textContent = "Вердер";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/werder.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===36550000) {
      teamVsHome.textContent = "Гамбург";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/hamburg.png');
      teamVsHomeMod.textContent = "Гамбург";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/hamburg.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===13100000) {
      teamVsHome.textContent = "Ганза Росток";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/hansarostoc.png');
      teamVsHomeMod.textContent = "Ганза Росток";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/hansarostoc.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===20880000) {
      teamVsHome.textContent = "Ганновер 96";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/hannover.png');
      teamVsHomeMod.textContent = "Ганновер 96";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/hannover.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===17080000) {
      teamVsHome.textContent = "Дармштадт";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/darmstadt.png');
      teamVsHomeMod.textContent = "Дармштадт";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/darmstadt.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===13930000) {
      teamVsHome.textContent = "Динамо Дрезден";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/dinamoDrezden.png');
      teamVsHomeMod.textContent = "Динамо Дрезден";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/dinamoDrezden.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===13480000) {
      teamVsHome.textContent = "Зандхаузен";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/zandhauzen.png');
      teamVsHomeMod.textContent = "Зандхаузен";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/zandhauzen.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===12850000) {
      teamVsHome.textContent = "Ингольштадт";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/ingolstadt.png');
      teamVsHomeMod.textContent = "Ингольштадт";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/ingolstadt.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===15030000) {
      teamVsHome.textContent = "Карлсруэ";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/karslrue.png');
      teamVsHomeMod.textContent = "Карлсруэ";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/karslrue.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===25480000) {
      teamVsHome.textContent = "Нюрнберг";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/nurnberg.png');
      teamVsHomeMod.textContent = "Нюрнберг";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/nurnberg.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===17200000) {
      teamVsHome.textContent = "Падеборн 07";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/padeborn07.png');
      teamVsHomeMod.textContent = "Падеборн 07";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/padeborn07.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===25100000) {
      teamVsHome.textContent = "Санкт-Паули";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/sanctPauli.png');
      teamVsHomeMod.textContent = "Санкт-Паули";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/sanctPauli.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===25500000) {
      teamVsHome.textContent = "Фортуна Дюсс.";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/fortuna.png');
      teamVsHomeMod.textContent = "Фортуна Дюсс.";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/fortuna.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===17700000) {
      teamVsHome.textContent = "Хайденхайм";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/haddehaim.png');
      teamVsHomeMod.textContent = "Хайденхайм";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/haddehaim.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===16200000) {
      teamVsHome.textContent = "Хольштайн Киль";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/holshKil.png');
      teamVsHomeMod.textContent = "Хольштайн Киль";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/holshKil.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===32750000) {
      teamVsHome.textContent = "Шальке 04";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/shalke04.png');
      teamVsHomeMod.textContent = "Шальке 04";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/shalke04.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===11080000) {
      teamVsHome.textContent = "Эрцгебирге Ауэ";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/ercebirgeAUE.png');
      teamVsHomeMod.textContent = "Эрцгебирге Ауэ";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/ercebirgeAUE.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoValue===16880000) {
      teamVsHome.textContent = "Ян Регенсбург";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_Bundesliga/yanRegensburg.png');
      teamVsHomeMod.textContent = "Ян Регенсбург";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_Bundesliga/yanRegensburg.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}
BundesligaTwoHome.addEventListener('change', () => {
   showBundesligaTwoHome();
})

/////////////////////// Ла Лига дом ////////////////////////

function showLaLigaHome () {
   const selectNameHomeLaLiga = document.formMath.selectNameHomeLaLiga.value
   const selectNameHomeLaLigaValue = Number.parseInt(selectNameHomeLaLiga);

   if (selectNameHomeLaLigaValue===190600000) {
      teamVsHome.textContent = "Атлетик Бильбао";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/atletikBilbao.png');
      teamVsHomeMod.textContent = "Атлетик Бильбао";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/atletikBilbao.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===66700000) {
      teamVsHome.textContent = "Алавес";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/Alaves.png');
      teamVsHomeMod.textContent = "Алавес";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/Alaves.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===646500000) {
      teamVsHome.textContent = "Атлетико Мадрид";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/atletikoMadrid.png');
      teamVsHomeMod.textContent = "Атлетико Мадрид";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/atletikoMadrid.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===650500000) {
      teamVsHome.textContent = "Барселона";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/Barcelona.png');
      teamVsHomeMod.textContent = "Барселона";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/Barcelona.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===230100000) {
      teamVsHome.textContent = "Бетис";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/Betis.png');
      teamVsHomeMod.textContent = "Бетис";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/Betis.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===298300000) {
      teamVsHome.textContent = "Валенсия";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/valencia.png');
      teamVsHomeMod.textContent = "Валенсия";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/valencia.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===367000000) {
      teamVsHome.textContent = "Вильяреал";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/vilareal.png');
      teamVsHomeMod.textContent = "Вильяреал";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/vilareal.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===86000000) {
      teamVsHome.textContent = "Гранада";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/granada.png');
      teamVsHomeMod.textContent = "Гранада";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/granada.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===62150000) {
      teamVsHome.textContent = "Кадис";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/kadis.png');
      teamVsHomeMod.textContent = "Кадис";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/kadis.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===82200000) {
      teamVsHome.textContent = "Леванте";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/levante.png');
      teamVsHomeMod.textContent = "Леванте";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/levante.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===74500000) {
      teamVsHome.textContent = "Мальорка";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/mallorca.png');
      teamVsHomeMod.textContent = "Мальорка";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/mallorca.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===87600000) {
      teamVsHome.textContent = "Осасуна";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/osasuna.png');
      teamVsHomeMod.textContent = "Осасуна";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/osasuna.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===57300000) {
      teamVsHome.textContent = "Райо Вальекано";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/rayoValecano.png');
      teamVsHomeMod.textContent = "Райо Вальекано";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/rayoValecano.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===780000000) {
      teamVsHome.textContent = "Реал Мадрид";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/realMadrid.png');
      teamVsHomeMod.textContent = "Реал Мадрид";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/realMadrid.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===395000000) {
      teamVsHome.textContent = "Реал Сосьедад";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/realSosiedad.png');
      teamVsHomeMod.textContent = "Реал Сосьедад";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/realSosiedad.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===424900000) {
      teamVsHome.textContent = "Севилья";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/sevilla.png');
      teamVsHomeMod.textContent = "Севилья";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/sevilla.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===124700000) {
      teamVsHome.textContent = "Сельта";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/celta.png');
      teamVsHomeMod.textContent = "Сельта";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/celta.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===150300000) {
      teamVsHome.textContent = "Хетафе";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/xetafe.png');
      teamVsHomeMod.textContent = "Хетафе";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/xetafe.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===48500000) {
      teamVsHome.textContent = "Эльче";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/elche.png');
      teamVsHomeMod.textContent = "Эльче";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/elche.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeLaLigaValue===112500000) {
      teamVsHome.textContent = "Эспаньол";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/LaLiga/espaniol.png');
      teamVsHomeMod.textContent = "Эспаньол";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/LaLiga/espaniol.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}

LaLigaHome.addEventListener('change', () => {
   showLaLigaHome();
})

////////////// Вторая Ла Лига дом ///////////////////////////////////////////

function showLaLigaTwoHome () {
   const selectNameHomeLaLigaTwo = document.formMath.selectNameHomeLaLigaTwo.value
   const selectNameHomeLaLigaTwoValue = Number.parseInt(selectNameHomeLaLigaTwo);

   if (selectNameHomeLaLigaTwoValue===6800000) {
      teamVsHome.textContent = "Алькорон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/alcoron.png');
      teamVsHomeMod.textContent = "Алькорон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/alcoron.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===57400000) {
      teamVsHome.textContent = "Альмерия";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/almeria.png');
      teamVsHomeMod.textContent = "Альмерия";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/almeria.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===10250000) {
      teamVsHome.textContent = "Аморебьета";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/amorebieta.png');
      teamVsHomeMod.textContent = "Аморебьета";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/amorebieta.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===8000000) {
      teamVsHome.textContent = "Бургос";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/burgos.png');
      teamVsHomeMod.textContent = "Бургос";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/burgos.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===27900000) {
      teamVsHome.textContent = "Жирона";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/girona.png');
      teamVsHomeMod.textContent = "Жирона";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/girona.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===11200000) {
      teamVsHome.textContent = "Ибица";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/ibiza.png');
      teamVsHomeMod.textContent = "Ибица";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/ibiza.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===12500000) {
      teamVsHome.textContent = "Картахена";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/kartahena.png');
      teamVsHomeMod.textContent = "Картахена";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/kartahena.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===23000000) {
      teamVsHome.textContent = "Лас-Пальмас";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/lasPalmas.png');
      teamVsHomeMod.textContent = "Лас-Пальмас";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/lasPalmas.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===36500000) {
      teamVsHome.textContent = "Леганес";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/leganes.png');
      teamVsHomeMod.textContent = "Леганес";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/leganes.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===7400000) {
      teamVsHome.textContent = "Луго";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/lugo.png');
      teamVsHomeMod.textContent = "Луго";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/lugo.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===23300000) {
      teamVsHome.textContent = "Малага";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/malaga.png');
      teamVsHomeMod.textContent = "Малага";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/malaga.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===19000000) {
      teamVsHome.textContent = "Мирандес";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/mirandes.png');
      teamVsHomeMod.textContent = "Мирандес";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/mirandes.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===14500000) {
      teamVsHome.textContent = "Понферрадина";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/ponferandina.png');
      teamVsHomeMod.textContent = "Понферрадина";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/ponferandina.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===46800000) {
      teamVsHome.textContent = "Реал Вальядолид";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/valiadolid.png');
      teamVsHomeMod.textContent = "Реал Вальядолид";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/valiadolid.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===18800000) {
      teamVsHome.textContent = "Реал Овьедо";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/oviedo.png');
      teamVsHomeMod.textContent = "Реал Овьедо";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/oviedo.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===25000000) {
      teamVsHome.textContent = "Сарагоса";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/saragoza.png');
      teamVsHomeMod.textContent = "Сарагоса";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/saragoza.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===30750000) {
      teamVsHome.textContent = "Реал Сосьедад Б";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/realSosiwdadB.png');
      teamVsHomeMod.textContent = "Реал Сосьедад Б";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/realSosiwdadB.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===28350000) {
      teamVsHome.textContent = "Спортинг Хихон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/sportingHihon.png');
      teamVsHomeMod.textContent = "Спортинг Хихон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/sportingHihon.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===18900000) {
      teamVsHome.textContent = "Тенерифе";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/tenerife.png');
      teamVsHomeMod.textContent = "Тенерифе";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/tenerife.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===29600000) {
      teamVsHome.textContent = "Уэска";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/weska.png');
      teamVsHomeMod.textContent = "Уэска";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/weska.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===14700000) {
      teamVsHome.textContent = "Фуэнлабрада";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/fuenlabrada.png');
      teamVsHomeMod.textContent = "Фуэнлабрада";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/fuenlabrada.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLaLigaTwoValue===29800000) {
      teamVsHome.textContent = "Эйбар";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/2_LaLiga/eibar.png');
      teamVsHomeMod.textContent = "Эйбар";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/2_LaLiga/eibar.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}
LaLigaTwoHome.addEventListener('change', () => {
   showLaLigaTwoHome ();
}
)

///////////////////////// Серия А дом /////////////////////////////////////

function showSeriaAHome () {
   const selectNameHomeSeriaA = document.formMath.selectNameHomeSeriaA.value
   const selectNameHomeSeriaAValue = Number.parseInt(selectNameHomeSeriaA);

   if (selectNameHomeSeriaAValue===379900000) {
      teamVsHome.textContent = "Аталанта";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/atalanta.png');
      teamVsHomeMod.textContent = "Аталанта";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/atalanta.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===142750000) {
      teamVsHome.textContent = "Болонья";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/bolonia.png');
      teamVsHomeMod.textContent = "Болонья";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/bolonia.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===87980000) {
      teamVsHome.textContent = "Венеция";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/venezia.png');
      teamVsHomeMod.textContent = "Венеция";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/venezia.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===108200000) {
      teamVsHome.textContent = "Дженоа";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/genoa.png');
      teamVsHomeMod.textContent = "Дженоа";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/genoa.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===550900000) {
      teamVsHome.textContent = "Интер Милан";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/inter.png');
      teamVsHomeMod.textContent = "Интер Милан";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/inter.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===129500000) {
      teamVsHome.textContent = "Кальяри";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/kaliari.png');
      teamVsHomeMod.textContent = "Кальяри";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/kaliari.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }

   if (selectNameHomeSeriaAValue===267450000) {
      teamVsHome.textContent = "Лацио";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/lazio.png');
      teamVsHomeMod.textContent = "Лацио";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/lazio.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===466600000) {
      teamVsHome.textContent = "Милан";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/milan.png');
      teamVsHomeMod.textContent = "Милан";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/milan.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===505850000) {
      teamVsHome.textContent = "Наполи";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/napoli.png');
      teamVsHomeMod.textContent = "Наполи";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/napoli.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===390650000) {
      teamVsHome.textContent = "Рома";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/roma.png');
      teamVsHomeMod.textContent = "Рома";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/roma.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===55850000) {
      teamVsHome.textContent = "Салернитана";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/salernitana.png');
      teamVsHomeMod.textContent = "Салернитана";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/salernitana.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===103300000) {
      teamVsHome.textContent = "Сампдория";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/sampdoria.png');
      teamVsHomeMod.textContent = "Сампдория";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/sampdoria.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===205600000) {
      teamVsHome.textContent = "Сассуоло";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/sasullo.png');
      teamVsHomeMod.textContent = "Сассуоло";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/sasullo.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===70000000) {
      teamVsHome.textContent = "Специя";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/spezia.png');
      teamVsHomeMod.textContent = "Специя";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/spezia.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===205680000) {
      teamVsHome.textContent = "Торино";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/torino.png');
      teamVsHomeMod.textContent = "Торино";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/torino.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===103250000) {
      teamVsHome.textContent = "Удинезе";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/udineze.png');
      teamVsHomeMod.textContent = "Удинезе";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/udineze.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===232400000) {
      teamVsHome.textContent = "Фиорентина";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/fiaorentina.png');
      teamVsHomeMod.textContent = "Фиорентина";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/fiaorentina.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===116530000) {
      teamVsHome.textContent = "Верона";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/varona.png');
      teamVsHomeMod.textContent = "Верона";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/varona.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===86600000) {
      teamVsHome.textContent = "Эмполи";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/empoli.png');
      teamVsHomeMod.textContent = "Эмполи";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/empoli.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaAValue===566400000) {
      teamVsHome.textContent = "Ювентус";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria A/juventus.png');
      teamVsHomeMod.textContent = "Ювентус";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria A/juventus.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}
SeriaAHome.addEventListener('change', () => {
   showSeriaAHome()
})

///////////////////////////// Серия Б дом ///////////////////////////////////////
function showSeriaBHome () {
   const selectNameHomeSeriaB = document.formMath.selectNameHomeSeriaB.value
   const selectNameHomeSeriaBValue = Number.parseInt(selectNameHomeSeriaB);

   if (selectNameHomeSeriaBValue===10400000) {
      teamVsHome.textContent = "Алессандрия";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/alessandria.png');
      teamVsHomeMod.textContent = "Аталанта";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/alessandria.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===12550000) {
      teamVsHome.textContent = "Асколи";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/ascoli.png');
      teamVsHomeMod.textContent = "Асколи";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/ascoli.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===29980000) {
      teamVsHome.textContent = "Беневенто";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/benevento.png');
      teamVsHomeMod.textContent = "Беневенто";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/benevento.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===36000000) {
      teamVsHome.textContent = "Брешиа";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/breshia.png');
      teamVsHomeMod.textContent = "Брешиа";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/breshia.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===16130000) {
      teamVsHome.textContent = "Виченца";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/vichenza.png');
      teamVsHomeMod.textContent = "Виченца";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/vichenza.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===17580000) {
      teamVsHome.textContent = "Козенца";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/kozenca.png');
      teamVsHomeMod.textContent = "Козенца";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/kozenca.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===16380000) {
      teamVsHome.textContent = "Комо";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/Komo.png');
      teamVsHomeMod.textContent = "Комо";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/Komo.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===24880000) {
      teamVsHome.textContent = "Кремонезе";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/kremoneze.png');
      teamVsHomeMod.textContent = "Кремонезе";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/kremoneze.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===20930000) {
      teamVsHome.textContent = "Кротоне";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/krotone.png');
      teamVsHomeMod.textContent = "Кротоне";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/krotone.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===32900000) {
      teamVsHome.textContent = "Лечче";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/lechche.png');
      teamVsHomeMod.textContent = "Лечче";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/lechche.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===44650000) {
      teamVsHome.textContent = "Монца";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/monza.png');
      teamVsHomeMod.textContent = "Монца";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/monza.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===57550000) {
      teamVsHome.textContent = "Парма";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/parma.png');
      teamVsHomeMod.textContent = "Парма";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/parma.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===13800000) {
      teamVsHome.textContent = "Перуджа";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/perugga.png');
      teamVsHomeMod.textContent = "Перуджа";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/perugga.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===33000000) {
      teamVsHome.textContent = "Пиза";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/piza.png');
      teamVsHomeMod.textContent = "Пиза";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/piza.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===8650000) {
      teamVsHome.textContent = "Порденеоне";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/pordeone.png');
      teamVsHomeMod.textContent = "Порденеоне";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/pordeone.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===15500000) {
      teamVsHome.textContent = "Реджина";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/regina.png');
      teamVsHomeMod.textContent = "Реджина";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/regina.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===26430000) {
      teamVsHome.textContent = "СПАЛ";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/SPAL.png');
      teamVsHomeMod.textContent = "СПАЛ";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/SPAL.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===15480000) {
      teamVsHome.textContent = "Тернана";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/ternana.png');
      teamVsHomeMod.textContent = "Тернана";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/ternana.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===18830000) {
      teamVsHome.textContent = "Фрозиноне";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/frozinone.png');
      teamVsHomeMod.textContent = "Фрозиноне";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/frozinone.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeSeriaBValue===12480000) {
      teamVsHome.textContent = "Читаделла";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Seria_B/chitadella.png');
      teamVsHomeMod.textContent = "Читаделла";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Seria_B/chitadella.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}
SeriaBHome.addEventListener('change', () => {
   showSeriaBHome()
})

//////////////////////// Лига 1 дом ////////////////////////////////////////

function showLeague1Home () {
   const selectNameHomeLeague1 = document.formMath.selectNameHomeLeague1.value
   const selectNameHomeLeague1Value = Number.parseInt(selectNameHomeLeague1);

   if (selectNameHomeLeague1Value===61050000) {
      teamVsHome.textContent = "Анже";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/ange.png');
      teamVsHomeMod.textContent = "Анже";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/ange.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===87850000) {
      teamVsHome.textContent = "Бордо";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/bordo.png');
      teamVsHomeMod.textContent = "Бордо";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/bordo.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===76850000) {
      teamVsHome.textContent = "Брест";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/brest.png');
      teamVsHomeMod.textContent = "Брест";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/brest.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===42650000) {
      teamVsHome.textContent = "Клермон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/clermon.png');
      teamVsHomeMod.textContent = "Клермон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/clermon.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===113700000) {
      teamVsHome.textContent = "Ланс";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/lans.png');
      teamVsHomeMod.textContent = "Ланс";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/lans.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===239300000) {
      teamVsHome.textContent = "Лилль";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/lille.png');
      teamVsHomeMod.textContent = "Лилль";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/lille.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===316050000) {
      teamVsHome.textContent = "Лион";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/lion.png');
      teamVsHomeMod.textContent = "Лион";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/lion.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===52800000) {
      teamVsHome.textContent = "Лорьян";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/lorian.png');
      teamVsHomeMod.textContent = "Лорьян";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/lorian.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===250350000) {
      teamVsHome.textContent = "Марсель";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/marselle.png');
      teamVsHomeMod.textContent = "Марсель";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/marselle.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===88200000) {
      teamVsHome.textContent = "Метц";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/metz.png');
      teamVsHomeMod.textContent = "Метц";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/metz.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===352200000) {
      teamVsHome.textContent = "Монако";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/Monaco.png');
      teamVsHomeMod.textContent = "Монако";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/Monaco.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===98550000) {
      teamVsHome.textContent = "Монпелье";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/motpelier.png');
      teamVsHomeMod.textContent = "Монпелье";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/motpelier.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===89500000) {
      teamVsHome.textContent = "Нант";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/nant.png');
      teamVsHomeMod.textContent = "Нант";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/nant.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===237950000) {
      teamVsHome.textContent = "Ницца";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/nitsa.png');
      teamVsHomeMod.textContent = "Ницца";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/nitsa.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===909550000) {
      teamVsHome.textContent = "ПСЖ";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/PSG.png');
      teamVsHomeMod.textContent = "ПСЖ";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/PSG.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===216900000) {
      teamVsHome.textContent = "Ренн";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/renn.png');
      teamVsHomeMod.textContent = "Ренн";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/renn.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===106900000) {
      teamVsHome.textContent = "Сент-Этьен";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/sentEtien.png');
      teamVsHomeMod.textContent = "Сент-Этьен";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/sentEtien.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===99000000) {
      teamVsHome.textContent = "Реймс";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/reims.png');
      teamVsHomeMod.textContent = "Реймс";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/reims.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===95400000) {
      teamVsHome.textContent = "Страсбург";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/strasburg.png');
      teamVsHomeMod.textContent = "Страсбург";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/strasburg.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague1Value===58750000) {
      teamVsHome.textContent = "Труа";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_1/trua.png');
      teamVsHomeMod.textContent = "Труа";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_1/trua.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}

League1Home.addEventListener('change', () => {
   showLeague1Home()
})

//////////////////////////// Лига 2 дом /////////////////////////////////////
function showLeague2Home () {
   const selectNameHomeLeague2 = document.formMath.selectNameHomeLeague2.value
   const selectNameHomeLeague2Value = Number.parseInt(selectNameHomeLeague2);

   if (selectNameHomeLeague2Value===23300000) {
      teamVsHome.textContent = "Амьен";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/amien.png');
      teamVsHomeMod.textContent = "Амьен";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/amien.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===17550000) {
      teamVsHome.textContent = "Аяччо";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/ajacco.png');
      teamVsHomeMod.textContent = "Аяччо";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/ajacco.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===9950000) {
      teamVsHome.textContent = "Бастия";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/bastia.png');
      teamVsHomeMod.textContent = "Бастия";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/bastia.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===19050000) {
      teamVsHome.textContent = "Валансьен";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/valansien.png');
      teamVsHomeMod.textContent = "Валансьен";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/valansien.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===20450000) {
      teamVsHome.textContent = "Гавр";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/gavr.png');
      teamVsHomeMod.textContent = "Гавр";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/gavr.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===17450000) {
      teamVsHome.textContent = "Генгам";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/gengam.png');
      teamVsHomeMod.textContent = "Генгам";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/gengam.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===13500000) {
      teamVsHome.textContent = "Гренобль";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/grenoble.png');
      teamVsHomeMod.textContent = "Гренобль";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/grenoble.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===18450000) {
      teamVsHome.textContent = "Дижон";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/dijon.png');
      teamVsHomeMod.textContent = "Дижон";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/dijon.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===10350000) {
      teamVsHome.textContent = "Дюнкерк";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/dunkerk.png');
      teamVsHomeMod.textContent = "Дюнкерк";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/dunkerk.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===20150000) {
      teamVsHome.textContent = "Кан";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/kan.png');
      teamVsHomeMod.textContent = "Кан";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/kan.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===14500000) {
      teamVsHome.textContent = "Кевийи";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/kevii.png');
      teamVsHomeMod.textContent = "Кевийи";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/kevii.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===18750000) {
      teamVsHome.textContent = "Нанси";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/nanci.png');
      teamVsHomeMod.textContent = "Нанси";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/nanci.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===31050000) {
      teamVsHome.textContent = "Ним";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/nim.png');
      teamVsHomeMod.textContent = "Ним";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/nim.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===15700000) {
      teamVsHome.textContent = "Ньор";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/nior.png');
      teamVsHomeMod.textContent = "Ньор";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/nior.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===18950000) {
      teamVsHome.textContent = "Осер";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/oser.png');
      teamVsHomeMod.textContent = "Осер";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/oser.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===11750000) {
      teamVsHome.textContent = "Родез";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/rodez.png');
      teamVsHomeMod.textContent = "Родез";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/rodez.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===18550000) {
      teamVsHome.textContent = "Сошо";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/sosho.png');
      teamVsHomeMod.textContent = "Сошо";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/sosho.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===27200000) {
      teamVsHome.textContent = "Тулуза";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/tulusa.png');
      teamVsHomeMod.textContent = "Тулуза";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/tulusa.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===21000000) {
      teamVsHome.textContent = "ФК Париж";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/FCParis.png');
      teamVsHomeMod.textContent = "ФК Париж";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/FCParis.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomeLeague2Value===15500000) {
      teamVsHome.textContent = "ФК По";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/League_2/FcPo.png');
      teamVsHomeMod.textContent = "ФК По";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/League_2/FcPo.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}

League2Home.addEventListener('change', () => {
   showLeague2Home()
})

//////////////////// Примейра дом /////////////////////////////////\
function showPrimeiraHome () {
   const selectNameHomePrimeira = document.formMath.selectNameHomePrimeira.value
   const selectNameHomePrimeiraValue = Number.parseInt(selectNameHomePrimeira);

   if (selectNameHomePrimeiraValue===14200000) {
      teamVsHome.textContent = "Арока";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/aroka.png');
      teamVsHomeMod.textContent = "Арока";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/aroka.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===15130000) {
      teamVsHome.textContent = "Белененсеш";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/belenensesh.png');
      teamVsHomeMod.textContent = "Белененсеш";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/belenensesh.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===270500000) {
      teamVsHome.textContent = "Бенфика";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/benfika.png');
      teamVsHomeMod.textContent = "Бенфика";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/benfika.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===22600000) {
      teamVsHome.textContent = "Боавишта";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/boavishta.png');
      teamVsHomeMod.textContent = "Боавишта";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/boavishta.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===103800000) {
      teamVsHome.textContent = "Брага";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/braga.png');
      teamVsHomeMod.textContent = "Брага";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/braga.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===14950000) {
      teamVsHome.textContent = "Визела";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/vizela.png');
      teamVsHomeMod.textContent = "Визела";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/vizela.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===41950000) {
      teamVsHome.textContent = "Виктория Гимараэш";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/VitoriaGimaraesh.png');
      teamVsHomeMod.textContent = "Виктория Гимараэш";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/VitoriaGimaraesh.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===15600000) {
      teamVsHome.textContent = "Жил Висенте";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/zhilVisente.png');
      teamVsHomeMod.textContent = "Жил Висенте";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/zhilVisente.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===14450000) {
      teamVsHome.textContent = "Маритиму";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/Maritimu.png');
      teamVsHomeMod.textContent = "Маритиму";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/Maritimu.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===14750000) {
      teamVsHome.textContent = "Морейренсе";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/morereynce.png');
      teamVsHomeMod.textContent = "Морейренсе";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/morereynce.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===18100000) {
      teamVsHome.textContent = "Пасуш де Ферейра";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/pasuahDeFerey.png');
      teamVsHomeMod.textContent = "Пасуш де Ферейра";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/pasuahDeFerey.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===24880000) {
      teamVsHome.textContent = "Портимоненсе";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/portimonense.png');
      teamVsHomeMod.textContent = "Портимоненсе";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/portimonense.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===225300000) {
      teamVsHome.textContent = "Порту";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/portu.png');
      teamVsHomeMod.textContent = "Порту";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/portu.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===18430000) {
      teamVsHome.textContent = "Санта Клара";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/SantaKlara.png');
      teamVsHomeMod.textContent = "Санта Клара";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/SantaKlara.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===251700000) {
      teamVsHome.textContent = "Спортинг";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/Sporting.png');
      teamVsHomeMod.textContent = "Спортинг";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/Sporting.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===20950000) {
      teamVsHome.textContent = "Тондела";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/tondela.png');
      teamVsHomeMod.textContent = "Тондела";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/tondela.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===46250000) {
      teamVsHome.textContent = "Фамаликан";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/famalikan.png');
      teamVsHomeMod.textContent = "Фамаликан";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/famalikan.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
   if (selectNameHomePrimeiraValue===25450000) {
      teamVsHome.textContent = "Эшторил Прая";
      vs.textContent = "VS"
      document.querySelector('.img-home').setAttribute('src', 'images/Bwin/EshtorilParaya.png');
      teamVsHomeMod.textContent = "Эшторил Прая";
      vsMod.textContent = "VS"
      document.querySelector('.img-home_mod').setAttribute('src', 'images/Bwin/EshtorilParaya.png');
      document.querySelector('.img-home_mod').style.width = '70px'
   }
}
PrimeiraHome.addEventListener('change', () => {
   showPrimeiraHome()
})
/////////////////////////////////////////////////////////////////////////////
   

////////////////////////////////////Выбор лиги для гостей///////////////////////////////\
         
   function showNameAway () {
      const selectLeagueAwayValue = document.formMath.selectLeagueAway.value;
      const awayListValue = Number.parseInt(selectLeagueAwayValue);
     
   if (awayListValue===1) {
      document.querySelector('.container__selectNameAway').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'flex';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }

   if (awayListValue===2) {
      document.querySelector('.container__selectName_Cship-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'flex';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }

   if (awayListValue===3) {
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'flex';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }

   if (awayListValue===4) {
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'flex';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }

   if (awayListValue===5) {
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'flex';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }
   if (awayListValue===6) {
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'flex';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }
   if (awayListValue===7) {
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'flex';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }
   if (awayListValue===8) {
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'flex';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }
   if (awayListValue===9) {
      document.querySelector('.container__selectName_League1-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'flex';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }
   if (awayListValue===10) {
      document.querySelector('.container__selectName_League2-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'flex';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
      document.querySelector('.container__selectName_Primeira-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'none';
   }
   if (awayListValue===11) {
      document.querySelector('.container__selectName_Primeira-away').style.display = 'flex';
      document.querySelector('.container__choise-title_modnone_Primeira-away').style.display = 'flex';
      document.querySelector('.container__selectName_League2-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League2-away').style.display = 'none';
      document.querySelector('.container__selectName_League1-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_League1-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaB-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaB-away').style.display = 'none';
      document.querySelector('.container__selectName_SeriaA-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_SeriaA-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLigaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_LaLiga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_LaLiga-away').style.display = 'none';
      document.querySelector('.container__selectName_BundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesligaTwo-away').style.display = 'none';
      document.querySelector('.container__selectName_Bundesliga-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_bundesliga-away').style.display = 'none';
      document.querySelector('.container__selectName_Cship-away').style.display = 'none';
      document.querySelector('.container__choise-title_modnone_cship-away').style.display = 'none';
      document.querySelector('.container__selectNameAway').style.display = 'none';
      document.querySelector('.container__choise-title_modnone-apl-away').style.display = 'none';
   }


   }

   leagueAway.addEventListener('change', () => {
      showNameAway();
   })

   ///////////////////////Выбор команды гостей///////////////////////////////

   function showTeamAway () {
      const selectNameAway = document.formMath.selectNameAway.value
      const selectNameAwayValue = Number.parseInt(selectNameAway);
   if (selectNameAwayValue===511000000) {
      document.querySelector('.line__teamVs-away').textContent = "Арсенал"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/arsenal.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Арсенал"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/arsenal.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===426500000) {
      document.querySelector('.line__teamVs-away').textContent = "Астон Вилла"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/aston.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Астон Вилла"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/aston.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===145000000) {
      document.querySelector('.line__teamVs-away').textContent = "Бёрнли"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/bernly.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бёрнли"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/bernly.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===239900000) {
      document.querySelector('.line__teamVs-away').textContent = "Брайтон"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/braiton.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Брайтон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/braiton.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue==218900000) {
      document.querySelector('.line__teamVs-away').textContent = "Брентфорд"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/brent.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Брентфорд"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/brent.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue==350750000) {
      document.querySelector('.line__teamVs-away').textContent = "Вест Хэм"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/westham.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Вест Хэм"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/westham.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue==338500000) {
      document.querySelector('.line__teamVs-away').textContent = "Вулверхэмптон"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/wolvs.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Вулверхэмптон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/wolvs.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue==239950000) {
      document.querySelector('.line__teamVs-away').textContent = "Кристалл Пэлас"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/crispel.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кристалл Пэлас"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/crispel.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue==513800000) {
      document.querySelector('.line__teamVs-away').textContent = "Лестер"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/lester.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лестер"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/lester.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   
   if (selectNameAwayValue===889000000) {
      document.querySelector('.line__teamVs-away').textContent = "Ливерпуль"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/liverpool.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ливерпуль"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/liverpool.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===265000000) {
      document.querySelector('.line__teamVs-away').textContent = "Лидс"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/leads.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лидс"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/leads.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===991300000) {
      document.querySelector('.line__teamVs-away').textContent = "Ман Сити"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/mancity.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ман Сити"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/mancity.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===790250000) {
      document.querySelector('.line__teamVs-away').textContent = "Ман Юнайтед"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/manun.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ман Юнайтед"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/manun.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===155550000) {
      document.querySelector('.line__teamVs-away').textContent = "Норвич"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/norvich.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Норвич"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/norvich.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===278400000) {
      document.querySelector('.line__teamVs-away').textContent = "Ньюкасл"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/new.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ньюкасл"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/new.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===246750000) {
      document.querySelector('.line__teamVs-away').textContent = "Саутгемптон"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/sauth.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Саутгемптон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/sauth.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===580250000) {
      document.querySelector('.line__teamVs-away').textContent = "Тоттенхэм"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/tott.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Тоттенхэм"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/tott.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===143600000) {
      document.querySelector('.line__teamVs-away').textContent = "Уотфорд"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/watford.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Уотфорд"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/watford.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===883000000) {
      document.querySelector('.line__teamVs-away').textContent = "Челси"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/chelsey.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Челси"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/chelsey.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameAwayValue===463750000) {
      document.querySelector('.line__teamVs-away').textContent = "Эвертон"
      document.querySelector('.img-away').setAttribute('src', 'images/APL/everton.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Эвертон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/APL/everton.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }


   }

NameAway.addEventListener('change', () => {
   showTeamAway();
})

////////Чемпионшип в гостях//////////////

function showTeamChemshipAway () {
   const selectNameChipAway = document.formMath.selectNameChipAway.value
   const selectNameChipAwayValue = Number.parseInt(selectNameChipAway);

   if (selectNameChipAwayValue===28550000) {
      document.querySelector('.line__teamVs-away').textContent = "Барнсли"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/barnsley.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Барнсли"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/barnsley.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===36300000) {
      document.querySelector('.line__teamVs-away').textContent = "Бирмингем"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/birming.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бирмингем"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/birming.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===47800000) {
      document.querySelector('.line__teamVs-away').textContent = "Блэкберн"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/blackburn.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Блэкберн"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/blackburn.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===13050000) {
      document.querySelector('.line__teamVs-away').textContent = "Блэкпул"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/blackpool.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Блэкпул"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/blackpool.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===169600000) {
      document.querySelector('.line__teamVs-away').textContent = "Борнмут"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/bornmut.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Борнмут"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/bornmut.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===33900000) {
      document.querySelector('.line__teamVs-away').textContent = "Бристоль"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/bristol.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бристоль"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/bristol.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===86550000) {
      document.querySelector('.line__teamVs-away').textContent = "Вест Бромвич"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/westBrom.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Вест Бромвич"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/westBrom.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===33600000) {
      document.querySelector('.line__teamVs-away').textContent = "Дерби Каунти"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/derbyCounty.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Дерби Каунти"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/derbyCounty.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===31600000) {
      document.querySelector('.line__teamVs-away').textContent = "Кардифф"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/kardiff.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кардифф"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/kardiff.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===19900000) {
      document.querySelector('.line__teamVs-away').textContent = "Ковентри"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/coventry.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ковентри"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/coventry.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===38950000) {
      document.querySelector('.line__teamVs-away').textContent = "Куинз Парк Р."
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/qpr.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Куинз Парк Р."
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/qpr.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===20200000) {
      document.querySelector('.line__teamVs-away').textContent = "Лутон Таун"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/luton.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лутон Таун"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/luton.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===54400000) {
      document.querySelector('.line__teamVs-away').textContent = "Мидлсбро"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/middlsbro.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Мидлсбро"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/middlsbro.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===39600000) {
      document.querySelector('.line__teamVs-away').textContent = "Миллуолл"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/milwall.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Миллуолл"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/milwall.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===58200000) {
      document.querySelector('.line__teamVs-away').textContent = "Ноттингем Форест"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/nottingham.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ноттингем Форест"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/nottingham.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===11550000) {
      document.querySelector('.line__teamVs-away').textContent = "Питерборо"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/piterboro.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Питерборо"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/piterboro.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===34830000) {
      document.querySelector('.line__teamVs-away').textContent = "Престон"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/preston.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Престон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/preston.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===37100000) {
      document.querySelector('.line__teamVs-away').textContent = "Рединг"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/riding.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Рединг"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/riding.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===58600000) {
      document.querySelector('.line__teamVs-away').textContent = "Сток Сити"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/stockcity.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Сток Сити"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/stockcity.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===38950000) {
      document.querySelector('.line__teamVs-away').textContent = "Суонси"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/swoncy.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Суонси"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/swoncy.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===147000000) {
      document.querySelector('.line__teamVs-away').textContent = "Фулхэм"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/fulham.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Фулхэм"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/fulham.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===37650000) {
      document.querySelector('.line__teamVs-away').textContent = "Хаддерсфилд"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/haddersfild.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Хаддерсфилд"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/haddersfild.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===21200000) {
      document.querySelector('.line__teamVs-away').textContent = "Халл Сити"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/hallcity.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Халл Сити"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/hallcity.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameChipAwayValue===94100000) {
      document.querySelector('.line__teamVs-away').textContent = "Шеффилд Юнайтед"
      document.querySelector('.img-away').setAttribute('src', 'images/Championship/sheffieldUnited.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Шеффилд Юнайтед"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Championship/sheffieldUnited.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}

chemShipAway.addEventListener('change', () => {
   showTeamChemshipAway();
})

//////////// Бундеслига гости /////////

function showTeamBundesligaAway () {
   const selectNameBundesligaAway = document.formMath.selectNameBundesligaAway.value
   const selectNameBundesligaAwayValue = Number.parseInt(selectNameBundesligaAway);

   if (selectNameBundesligaAwayValue===199800000) {
      document.querySelector('.line__teamVs-away').textContent = "Айнтрахт"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/aintrakht.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Айнтрахт"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/aintrakht.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===55750000) {
      document.querySelector('.line__teamVs-away').textContent = "Арминия"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/arminia.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Арминия"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/arminia.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===98800000) {
      document.querySelector('.line__teamVs-away').textContent = "Аугсбург"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/augsburg.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Аугсбург"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/augsburg.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===815750000) {
      document.querySelector('.line__teamVs-away').textContent = "Бавария Мюнхен"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/bavaria.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бавария Мюнхен"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/bavaria.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===417450000) {
      document.querySelector('.line__teamVs-away').textContent = "Байер 04"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/bayer04.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Байер 04"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/bayer04.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===576300000) {
      document.querySelector('.line__teamVs-away').textContent = "Боруссия Дортмунд"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/Dortmund.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Боруссия Дортмунд"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/Dortmund.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===237300000) {
      document.querySelector('.line__teamVs-away').textContent = "Боруссия Мёнхенг."
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/borussiaMunh.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Боруссия Мёнхенг."
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/borussiaMunh.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===41850000) {
      document.querySelector('.line__teamVs-away').textContent = "Бохум"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/bohum.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бохум"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/bohum.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===18530000) {
      document.querySelector('.line__teamVs-away').textContent = "Вольсбург"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/wolfsburg.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Вольфсбург"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/wolfsburg.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===106430000) {
      document.querySelector('.line__teamVs-away').textContent = "Герта Берлин"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/herta.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Герта Берлин"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/herta.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===29800000) {
      document.querySelector('.line__teamVs-away').textContent = "Гройтер Фюрт"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/groiterFurt.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Гройтер Фюрт"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/groiterFurt.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===75510000) {
      document.querySelector('.line__teamVs-away').textContent = "Кёльн"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/keln.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кёльн"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/keln.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===122050000) {
      document.querySelector('.line__teamVs-away').textContent = "Майнц 05"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/mainz05.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Майнц 05"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/mainz05.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===454000000) {
      document.querySelector('.line__teamVs-away').textContent = "РБ Лейпциг"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/leipzig.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "РБ Лейпциг"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/leipzig.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===71600000) {
      document.querySelector('.line__teamVs-away').textContent = "Унион Берлин"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/unionBerlin.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Унион Берлин"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/unionBerlin.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===146750000) {
      document.querySelector('.line__teamVs-away').textContent = "Фрайбург"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/fraiburg.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Фрайбург"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/fraiburg.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===197450000) {
      document.querySelector('.line__teamVs-away').textContent = "Хоффенхайм"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/hoffenhaim.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Хоффенхайм"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/hoffenhaim.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaAwayValue===182100000) {
      document.querySelector('.line__teamVs-away').textContent = "Штутгарт"
      document.querySelector('.img-away').setAttribute('src', 'images/Bundesliga/shtutgart.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Штутгарт"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bundesliga/shtutgart.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}

BundesligaAway.addEventListener('change', () => {
   showTeamBundesligaAway();
})

///////////////////// Вторая Бундеслига гости ///////////////////////

function showTeamBundesligaTwoAway () {
   const selectNameBundesligaTwoAway = document.formMath.selectNameBundesligaTwoAway.value
   const selectNameBundesligaTwoAwayValue = Number.parseInt(selectNameBundesligaTwoAway);

   if (selectNameBundesligaTwoAwayValue===39350000) {
      document.querySelector('.line__teamVs-away').textContent = "Вердер"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/werder.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Вердер"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/werder.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===36550000) {
      document.querySelector('.line__teamVs-away').textContent = "Гамбург"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/hamburg.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Гамбург"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/hamburg.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===13100000) {
      document.querySelector('.line__teamVs-away').textContent = "Ганза Росток"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/hansarostoc.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ганза Росток"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/hansarostoc.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===20880000) {
      document.querySelector('.line__teamVs-away').textContent = "Ганновер 96"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/hannover.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ганновер 96"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/hannover.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===17080000) {
      document.querySelector('.line__teamVs-away').textContent = "Дармштадт 98"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/darmstadt.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Дармштадт 98"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/darmstadt.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===13930000) {
      document.querySelector('.line__teamVs-away').textContent = "Динамо Дрезден"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/dinamoDrezden.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Динамо Дрезден"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/dinamoDrezden.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===13480000) {
      document.querySelector('.line__teamVs-away').textContent = "Зандхаузен"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/zandhauzen.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Зандхаузен"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/zandhauzen.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===12850000) {
      document.querySelector('.line__teamVs-away').textContent = "Ингольштадт"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/ingolstadt.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Зандхаузен"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/ingolstadt.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===15030000) {
      document.querySelector('.line__teamVs-away').textContent = "Карлсруэ"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/karslrue.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Карлсруэ"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/karslrue.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===25480000) {
      document.querySelector('.line__teamVs-away').textContent = "Нюрнберг"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/nurnberg.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Нюрнберг"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/nurnberg.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===17200000) {
      document.querySelector('.line__teamVs-away').textContent = "Падеборн 07"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/padeborn07.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Падеборн 07"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/padeborn07.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===25100000) {
      document.querySelector('.line__teamVs-away').textContent = "Санкт-Паули"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/sanctPauli.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Санкт-Паули"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/sanctPauli.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===25500000) {
      document.querySelector('.line__teamVs-away').textContent = "Фортуна Дюсс."
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/fortuna.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Фортуна Дюсс."
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/fortuna.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===17700000) {
      document.querySelector('.line__teamVs-away').textContent = "Хайденхайм"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/haddehaim.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Хайденхайм"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/haddehaim.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===16200000) {
      document.querySelector('.line__teamVs-away').textContent = "Хольштайн Киль"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/holshKil.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Хольштайн Киль"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/holshKil.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===32750000) {
      document.querySelector('.line__teamVs-away').textContent = "Шальке 04"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/shalke04.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Шальке 04"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/shalke04.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===11080000) {
      document.querySelector('.line__teamVs-away').textContent = "Эрцгебирге Ауэ"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/ercebirgeAUE.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Эрцгебирге Ауэ"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/ercebirgeAUE.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameBundesligaTwoAwayValue===16880000) {
      document.querySelector('.line__teamVs-away').textContent = "Ян Регенсбург"
      document.querySelector('.img-away').setAttribute('src', 'images/2_Bundesliga/yanRegensburg.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ян Регенсбург"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_Bundesliga/yanRegensburg.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}

BundesligaTwoAway.addEventListener('change', () => {
   showTeamBundesligaTwoAway();
})

///////////// Ла Лига гости ////////////////////////

function showTeamLaLigaAway () {
   const selectNameLaLigaAway = document.formMath.selectNameLaLigaAway.value
   const selectNameLaLigaAwayValue = Number.parseInt(selectNameLaLigaAway);

   if (selectNameLaLigaAwayValue===190600000) {
      document.querySelector('.line__teamVs-away').textContent = "Атлетик Бильбао"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/atletikBilbao.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Атлетик Бильбао"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/atletikBilbao.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===66700000) {
      document.querySelector('.line__teamVs-away').textContent = "Алавес"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/Alaves.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Алавес"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/Alaves.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===646500000) {
      document.querySelector('.line__teamVs-away').textContent = "Атлетико Мадрид"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/atletikoMadrid.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Атлетико Мадрид"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/atletikoMadrid.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===650500000) {
      document.querySelector('.line__teamVs-away').textContent = "Барселона"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/Barcelona.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Барселона"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/Barcelona.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===230100000) {
      document.querySelector('.line__teamVs-away').textContent = "Бетис"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/Betis.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бетис"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/Betis.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===298300000) {
      document.querySelector('.line__teamVs-away').textContent = "Валенсия"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/valencia.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Валенсия"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/valencia.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===367000000) {
      document.querySelector('.line__teamVs-away').textContent = "Вильяреал"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/vilareal.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Вильяреал"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/vilareal.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===86000000) {
      document.querySelector('.line__teamVs-away').textContent = "Гранада"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/granada.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Гранада"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/granada.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===62150000) {
      document.querySelector('.line__teamVs-away').textContent = "Кадис"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/kadis.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кадис"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/kadis.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===82200000) {
      document.querySelector('.line__teamVs-away').textContent = "Леванте"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/levante.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Леванте"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/levante.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===74500000) {
      document.querySelector('.line__teamVs-away').textContent = "Мальорка"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/mallorca.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Мальорка"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/mallorca.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===87600000) {
      document.querySelector('.line__teamVs-away').textContent = "Осасуна"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/osasuna.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Осасуна"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/osasuna.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===57300000) {
      document.querySelector('.line__teamVs-away').textContent = "Райо Вальекано"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/rayoValecano.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Райо Вальекано"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/rayoValecano.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===780000000) {
      document.querySelector('.line__teamVs-away').textContent = "Реал Мадрид"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/realMadrid.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Реал Мадрид"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/realMadrid.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===395000000) {
      document.querySelector('.line__teamVs-away').textContent = "Реал Сосьедад"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/realSosiedad.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Реал Сосьедад"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/realSosiedad.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===424900000) {
      document.querySelector('.line__teamVs-away').textContent = "Севилья"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/sevilla.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Севилья"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/sevilla.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===124700000) {
      document.querySelector('.line__teamVs-away').textContent = "Сельта"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/celta.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Сельта"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/celta.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===150300000) {
      document.querySelector('.line__teamVs-away').textContent = "Хетафе"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/xetafe.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Хетафе"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/xetafe.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===48500000) {
      document.querySelector('.line__teamVs-away').textContent = "Эльче"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/elche.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Эльче"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/elche.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }

   if (selectNameLaLigaAwayValue===112500000) {
      document.querySelector('.line__teamVs-away').textContent = "Эспаньол"
      document.querySelector('.img-away').setAttribute('src', 'images/LaLiga/espaniol.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Эспаньол"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/LaLiga/espaniol.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}
LaLigaAway.addEventListener('change', () => {
   showTeamLaLigaAway(); 
})

////////////// Вторая Ла Лига гости ///////////////////
function showTeamLaLigaTwoAway () {
   const selectNameLaLigaTwoAway = document.formMath.selectNameLaLigaTwoAway.value
   const selectNameLaLigaTwoAwayValue = Number.parseInt(selectNameLaLigaTwoAway);

   if (selectNameLaLigaTwoAwayValue===6800000) {
      document.querySelector('.line__teamVs-away').textContent = "Алькорон"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/alcoron.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Алькорон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/alcoron.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===57400000) {
      document.querySelector('.line__teamVs-away').textContent = "Альмерия"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/almeria.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Альмерия"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/almeria.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===10250000) {
      document.querySelector('.line__teamVs-away').textContent = "Аморебьета"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/amorebieta.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Аморебьета"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/amorebieta.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===8000000) {
      document.querySelector('.line__teamVs-away').textContent = "Бургос"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/burgos.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бургос"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/burgos.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===27900000) {
      document.querySelector('.line__teamVs-away').textContent = "Жирона"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/girona.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Жирона"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/girona.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===11200000) {
      document.querySelector('.line__teamVs-away').textContent = "Ибица"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/ibiza.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ибица"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/ibiza.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===12500000) {
      document.querySelector('.line__teamVs-away').textContent = "Картахена"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/kartahena.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Картахена"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/kartahena.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===23000000) {
      document.querySelector('.line__teamVs-away').textContent = "Лас-Пальмас"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/lasPalmas.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лас-Пальмас"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/lasPalmas.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===36500000) {
      document.querySelector('.line__teamVs-away').textContent = "Леганес"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/leganes.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Леганес"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/leganes.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===7400000) {
      document.querySelector('.line__teamVs-away').textContent = "Луго"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/lugo.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Луго"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/lugo.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===23300000) {
      document.querySelector('.line__teamVs-away').textContent = "Малага"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/malaga.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Малага"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/malaga.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===19000000) {
      document.querySelector('.line__teamVs-away').textContent = "Мирандес"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/mirandes.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Мирандес"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/mirandes.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===14500000) {
      document.querySelector('.line__teamVs-away').textContent = "Понферрадина"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/ponferandina.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Понферрадина"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/ponferandina.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===46800000) {
      document.querySelector('.line__teamVs-away').textContent = "Реал Вальядолид"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/valiadolid.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Реал Вальядолид"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/valiadolid.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===18800000) {
      document.querySelector('.line__teamVs-away').textContent = "Реал Овьедо"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/oviedo.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Реал Овьедо"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/oviedo.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===25000000) {
      document.querySelector('.line__teamVs-away').textContent = "Сарагоса"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/oviedo.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Сарагоса"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/oviedo.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===30750000) {
      document.querySelector('.line__teamVs-away').textContent = "Реал Сосьедад Б"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/realSosiwdadB.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Реал Сосьедад Б"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/realSosiwdadB.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===28350000) {
      document.querySelector('.line__teamVs-away').textContent = "Спортинг Хихон"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/sportingHihon.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Спортинг Хихон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/sportingHihon.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===18900000) {
      document.querySelector('.line__teamVs-away').textContent = "Тенерифе"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/tenerife.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Тенерифе"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/tenerife.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===29600000) {
      document.querySelector('.line__teamVs-away').textContent = "Уэска"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/weska.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Уэска"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/weska.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===14700000) {
      document.querySelector('.line__teamVs-away').textContent = "Фуэнлабрада"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/fuenlabrada.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Фуэнлабрада"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/fuenlabrada.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLaLigaTwoAwayValue===29800000) {
      document.querySelector('.line__teamVs-away').textContent = "Эйбар"
      document.querySelector('.img-away').setAttribute('src', 'images/2_LaLiga/eibar.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Эйбар"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/2_LaLiga/eibar.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}
LaLigaTwoAway.addEventListener('change', () => {
   showTeamLaLigaTwoAway()
})

////////////////////////// Серия А Гости ////////////////////////////////

function showTeamSeriaAAway () {
   const selectNameSeriaAAway = document.formMath.selectNameSeriaAAway.value
   const selectNameSeriaAAwayValue = Number.parseInt(selectNameSeriaAAway);

   if (selectNameSeriaAAwayValue===379900000) {
      document.querySelector('.line__teamVs-away').textContent = "Аталанта"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/atalanta.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Аталанта"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/atalanta.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===142750000) {
      document.querySelector('.line__teamVs-away').textContent = "Болонья"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/bolonia.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Болонья"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/bolonia.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===87980000) {
      document.querySelector('.line__teamVs-away').textContent = "Венеция"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/venezia.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Венеция"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/venezia.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===108200000) {
      document.querySelector('.line__teamVs-away').textContent = "Дженоа"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/genoa.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Дженоа"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/genoa.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===550900000) {
      document.querySelector('.line__teamVs-away').textContent = "Интер Милан"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/inter.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Интер Милан"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/inter.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===129500000) {
      document.querySelector('.line__teamVs-away').textContent = "Кальяри"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/kaliari.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кальяри"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/kaliari.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===267450000) {
      document.querySelector('.line__teamVs-away').textContent = "Лацио"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/lazio.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лацио"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/lazio.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===466600000) {
      document.querySelector('.line__teamVs-away').textContent = "Милан"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/milan.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Милан"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/milan.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===505850000) {
      document.querySelector('.line__teamVs-away').textContent = "Наполи"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/napoli.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Наполи"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/napoli.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===390650000) {
      document.querySelector('.line__teamVs-away').textContent = "Рома"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/roma.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Рома"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/roma.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===55850000) {
      document.querySelector('.line__teamVs-away').textContent = "Салернитана"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/salernitana.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Салернитана"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/salernitana.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===103300000) {
      document.querySelector('.line__teamVs-away').textContent = "Сампдория"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/sampdoria.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Сампдория"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/sampdoria.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===205600000) {
      document.querySelector('.line__teamVs-away').textContent = "Сассуоло"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/sasullo.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Сассуоло"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/sasullo.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===70000000) {
      document.querySelector('.line__teamVs-away').textContent = "Специя"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/spezia.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Специя"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/spezia.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===205680000) {
      document.querySelector('.line__teamVs-away').textContent = "Торино"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/torino.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Торино"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/torino.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===103250000) {
      document.querySelector('.line__teamVs-away').textContent = "Удинезе"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/udineze.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Удинезе"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/udineze.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===232400000) {
      document.querySelector('.line__teamVs-away').textContent = "Фиорентина"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/fiaorentina.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Фиорентина"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/fiaorentina.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===116530000) {
      document.querySelector('.line__teamVs-away').textContent = "Верона"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/varona.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Верона"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/varona.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===86600000) {
      document.querySelector('.line__teamVs-away').textContent = "Эмполи"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/empoli.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Эмполи"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/empoli.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaAAwayValue===566400000) {
      document.querySelector('.line__teamVs-away').textContent = "Ювентус"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria A/juventus.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ювентус"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria A/juventus.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   
}
SeriaAAway.addEventListener('click', () => {
   showTeamSeriaAAway()
})

///////////  Серия Б гости ////////////////////////

function showTeamSeriaBAway () {
   const selectNameSeriaBAway = document.formMath.selectNameSeriaBAway.value
   const selectNameSeriaBAwayValue = Number.parseInt(selectNameSeriaBAway);

   if (selectNameSeriaBAwayValue===10400000) {
      document.querySelector('.line__teamVs-away').textContent = "Алессандрия"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/alessandria.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Алессандрия"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/alessandria.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===12550000) {
      document.querySelector('.line__teamVs-away').textContent = "Асколи"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/ascoli.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Асколи"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/ascoli.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===29980000) {
      document.querySelector('.line__teamVs-away').textContent = "Беневенто"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/benevento.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Беневенто"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/benevento.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===36000000) {
      document.querySelector('.line__teamVs-away').textContent = "Брешиа"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/breshia.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Брешиа"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/breshia.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===16130000) {
      document.querySelector('.line__teamVs-away').textContent = "Виченца"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/vichenza.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Виченца"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/vichenza.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===17580000) {
      document.querySelector('.line__teamVs-away').textContent = "Козенца"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/kozenca.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Козенца"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/kozenca.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===16380000) {
      document.querySelector('.line__teamVs-away').textContent = "Комо"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/Komo.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Комо"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/Komo.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===24880000) {
      document.querySelector('.line__teamVs-away').textContent = "Кремонезе"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/kremoneze.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кремонезе"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/kremoneze.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===20930000) {
      document.querySelector('.line__teamVs-away').textContent = "Кротоне"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/krotone.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кротоне"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/krotone.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===32900000) {
      document.querySelector('.line__teamVs-away').textContent = "Лечче"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/lechche.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лечче"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/lechche.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===44650000) {
      document.querySelector('.line__teamVs-away').textContent = "Монца"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/monza.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Монца"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/monza.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===57550000) {
      document.querySelector('.line__teamVs-away').textContent = "Парма"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/parma.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Парма"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/parma.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===13800000) {
      document.querySelector('.line__teamVs-away').textContent = "Перуджа"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/perugga.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Перуджа"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/perugga.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===33000000) {
      document.querySelector('.line__teamVs-away').textContent = "Пиза"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/piza.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Пиза"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/piza.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===8650000) {
      document.querySelector('.line__teamVs-away').textContent = "Порденеоне"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/pordeone.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Порденеоне"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/pordeone.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===15500000) {
      document.querySelector('.line__teamVs-away').textContent = "Реджина"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/regina.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Реджина"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/regina.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===26430000) {
      document.querySelector('.line__teamVs-away').textContent = "СПАЛ"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/SPAL.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "СПАЛ"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/SPAL.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===15480000) {
      document.querySelector('.line__teamVs-away').textContent = "Тернана"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/ternana.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Тернана"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/ternana.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===18830000) {
      document.querySelector('.line__teamVs-away').textContent = "Фрозиноне"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/frozinone.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Фрозиноне"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/frozinone.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameSeriaBAwayValue===12480000) {
      document.querySelector('.line__teamVs-away').textContent = "Читаделла"
      document.querySelector('.img-away').setAttribute('src', 'images/Seria_B/chitadella.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Читаделла"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Seria_B/chitadella.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}

SeriaBAway.addEventListener('change', () => {
   showTeamSeriaBAway()
})

//////////////////// Лига 1 гости //////////////////////
function showTeamLeague1Away () {
   const selectNameLeague1Away = document.formMath.selectNameLeague1Away.value
   const selectNameLeague1AwayValue = Number.parseInt(selectNameLeague1Away);

   if (selectNameLeague1AwayValue===61050000) {
      document.querySelector('.line__teamVs-away').textContent = "Анже"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/ange.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Анже"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/ange.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===87850000) {
      document.querySelector('.line__teamVs-away').textContent = "Бордо"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/bordo.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бордо"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/bordo.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===76850000) {
      document.querySelector('.line__teamVs-away').textContent = "Брест"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/brest.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Брест"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/brest.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===42650000) {
      document.querySelector('.line__teamVs-away').textContent = "Клермон"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/clermon.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Клермон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/clermon.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===113700000) {
      document.querySelector('.line__teamVs-away').textContent = "Ланс"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/lans.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ланс"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/lans.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===239300000) {
      document.querySelector('.line__teamVs-away').textContent = "Лилль"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/lille.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лилль"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/lille.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===316050000) {
      document.querySelector('.line__teamVs-away').textContent = "Лион"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/lion.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лион"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/lion.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===52800000) {
      document.querySelector('.line__teamVs-away').textContent = "Лорьян"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/lorian.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Лорьян"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/lorian.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===250350000) {
      document.querySelector('.line__teamVs-away').textContent = "Марсель"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/marselle.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Марсель"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/marselle.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===88200000) {
      document.querySelector('.line__teamVs-away').textContent = "Метц"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/metz.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Метц"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/metz.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===352200000) {
      document.querySelector('.line__teamVs-away').textContent = "Монако"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/Monaco.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Монако"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/Monaco.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===98550000) {
      document.querySelector('.line__teamVs-away').textContent = "Монпелье"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/motpelier.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Монпелье"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/motpelier.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===89500000) {
      document.querySelector('.line__teamVs-away').textContent = "Нант"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/nant.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Нант"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/nant.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===237950000) {
      document.querySelector('.line__teamVs-away').textContent = "Ницца"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/nitsa.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ницца"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/nitsa.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===909550000) {
      document.querySelector('.line__teamVs-away').textContent = "ПСЖ"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/PSG.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "ПСЖ"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/PSG.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===216900000) {
      document.querySelector('.line__teamVs-away').textContent = "Ренн"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/renn.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ренн"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/renn.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===106900000) {
      document.querySelector('.line__teamVs-away').textContent = "Сент-Этьен"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/sentEtien.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Сент-Этьен"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/sentEtien.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===99000000) {
      document.querySelector('.line__teamVs-away').textContent = "Реймс"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/reims.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Реймс"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/reims.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===95400000) {
      document.querySelector('.line__teamVs-away').textContent = "Страсбург"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/strasburg.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Страсбург"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/strasburg.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague1AwayValue===58750000) {
      document.querySelector('.line__teamVs-away').textContent = "Труа"
      document.querySelector('.img-away').setAttribute('src', 'images/League_1/trua.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Труа"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_1/trua.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}
League1Away.addEventListener('change', () => {
   showTeamLeague1Away()
})

////////////////  Лига 2 Гости /////////////////
function showTeamLeague2Away () {
   const selectNameLeague2Away = document.formMath.selectNameLeague2Away.value
   const selectNameLeague2AwayValue = Number.parseInt(selectNameLeague2Away);

   if (selectNameLeague2AwayValue===23300000) {
      document.querySelector('.line__teamVs-away').textContent = "Амьен"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/amien.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Амьен"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/amien.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===17550000) {
      document.querySelector('.line__teamVs-away').textContent = "Аяччо"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/ajacco.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Аяччо"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/ajacco.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===9950000) {
      document.querySelector('.line__teamVs-away').textContent = "Бастия"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/bastia.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бастия"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/bastia.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===19050000) {
      document.querySelector('.line__teamVs-away').textContent = "Валансьен"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/valansien.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Валансьен"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/valansien.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===20450000) {
      document.querySelector('.line__teamVs-away').textContent = "Гавр"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/gavr.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Гавр"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/gavr.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===17450000) {
      document.querySelector('.line__teamVs-away').textContent = "Генгам"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/gengam.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Генгам"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/gengam.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===13500000) {
      document.querySelector('.line__teamVs-away').textContent = "Гренобль"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/grenoble.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Гренобль"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/grenoble.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===18450000) {
      document.querySelector('.line__teamVs-away').textContent = "Дижон"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/dijon.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Дижон"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/dijon.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===10350000) {
      document.querySelector('.line__teamVs-away').textContent = "Дюнкерк"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/dunkerk.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Дюнкерк"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/dunkerk.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===20150000) {
      document.querySelector('.line__teamVs-away').textContent = "Кан"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/kan.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кан"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/kan.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===14500000) {
      document.querySelector('.line__teamVs-away').textContent = "Кевийи"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/kevii.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Кевийи"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/kevii.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===18750000) {
      document.querySelector('.line__teamVs-away').textContent = "Нанси"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/nanci.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Нанси"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/nanci.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===31050000) {
      document.querySelector('.line__teamVs-away').textContent = "Ним"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/nim.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ним"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/nim.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===15700000) {
      document.querySelector('.line__teamVs-away').textContent = "Ньор"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/nior.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Ньор"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/nior.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===18950000) {
      document.querySelector('.line__teamVs-away').textContent = "Осер"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/oser.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Осер"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/oser.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===11750000) {
      document.querySelector('.line__teamVs-away').textContent = "Родез"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/rodez.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Родез"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/rodez.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===18550000) {
      document.querySelector('.line__teamVs-away').textContent = "Сошо"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/sosho.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Сошо"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/sosho.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===27200000) {
      document.querySelector('.line__teamVs-away').textContent = "Тулуза"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/tulusa.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Тулуза"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/tulusa.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===21000000) {
      document.querySelector('.line__teamVs-away').textContent = "ФК Париж"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/FCParis.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "ФК Париж"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/FCParis.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNameLeague2AwayValue===15500000) {
      document.querySelector('.line__teamVs-away').textContent = "ФК По"
      document.querySelector('.img-away').setAttribute('src', 'images/League_2/FcPo.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "ФК По"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/League_2/FcPo.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}
League2Away.addEventListener('change', () => {
   showTeamLeague2Away()
})

/////////////////// Примейра Гости //////////////////
function showTeamPrimeiraAway () {
   const selectNamePrimeiraAway = document.formMath.selectNamePrimeiraAway.value
   const selectNamePrimeiraAwayValue = Number.parseInt(selectNamePrimeiraAway);

   if (selectNamePrimeiraAwayValue===14200000) {
      document.querySelector('.line__teamVs-away').textContent = "Арока"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/aroka.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Арока"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/aroka.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===15130000) {
      document.querySelector('.line__teamVs-away').textContent = "Белененсеш"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/belenensesh.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Белененсеш"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/belenensesh.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===270500000) {
      document.querySelector('.line__teamVs-away').textContent = "Бенфика"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/benfika.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Бенфика"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/benfika.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===22600000) {
      document.querySelector('.line__teamVs-away').textContent = "Боавишта"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/boavishta.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Боавишта"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/boavishta.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===103800000) {
      document.querySelector('.line__teamVs-away').textContent = "Брага"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/braga.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Брага"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/braga.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===14950000) {
      document.querySelector('.line__teamVs-away').textContent = "Визела"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/vizela.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Визела"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/vizela.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===41950000) {
      document.querySelector('.line__teamVs-away').textContent = "Виктория Гимараэш"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/VitoriaGimaraesh.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Виктория Гимараэш"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/VitoriaGimaraesh.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===15600000) {
      document.querySelector('.line__teamVs-away').textContent = "Жил Висенте"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/zhilVisente.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Жил Висенте"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/zhilVisente.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===14450000) {
      document.querySelector('.line__teamVs-away').textContent = "Маритиму"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/Maritimu.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Маритиму"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/Maritimu.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===14750000) {
      document.querySelector('.line__teamVs-away').textContent = "Морейренсе"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/morereynce.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Морейренсе"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/morereynce.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===18100000) {
      document.querySelector('.line__teamVs-away').textContent = "Пасуш де Ферейра"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/pasuahDeFerey.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Пасуш де Ферейра"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/pasuahDeFerey.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===24880000) {
      document.querySelector('.line__teamVs-away').textContent = "Портимоненсе"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/portimonense.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Портимоненсе"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/portimonense.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===225300000) {
      document.querySelector('.line__teamVs-away').textContent = "Порту"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/portu.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Порту"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/portu.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===18430000) {
      document.querySelector('.line__teamVs-away').textContent = "Санта Клара"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/SantaKlara.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Санта Клара"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/SantaKlara.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===251700000) {
      document.querySelector('.line__teamVs-away').textContent = "Спортинг"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/Sporting.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Спортинг"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/Sporting.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===20950000) {
      document.querySelector('.line__teamVs-away').textContent = "Тондела"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/tondela.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Тондела"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/tondela.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===46250000) {
      document.querySelector('.line__teamVs-away').textContent = "Фамаликан"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/famalikan.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Фамаликан"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/famalikan.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
   if (selectNamePrimeiraAwayValue===25450000) {
      document.querySelector('.line__teamVs-away').textContent = "Эшторил Прая"
      document.querySelector('.img-away').setAttribute('src', 'images/Bwin/EshtorilParaya.png')
      document.querySelector('.line__teamVs-away_mod').textContent = "Эшторил Прая"
      document.querySelector('.img-away_mod').setAttribute('src', 'images/Bwin/EshtorilParaya.png')
      document.querySelector('.img-away_mod').style.width = '70px'
   }
}
PrimeiraAway.addEventListener('change', () => {
   showTeamPrimeiraAway ()
})


allLineButton.addEventListener('click', () => {
   showTableMobile.classList.toggle('line__persent-container_toggle');
})

// allLineButton.addEventListener('click', () => {

//    if(document.getElementById('mobile').style.display = 'flex') {
//       document.getElementById('mobile').style.display = 'none'
//    };
//  })

    

    

resultMathButton.addEventListener('click', () => {
  areaRectangle();
  PoissonDistrib();
  
  })
    