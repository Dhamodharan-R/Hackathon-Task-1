const navbar =document.createElement('div');
navbar.setAttribute("class","navbar");
navbar.innerHTML=`
<ul>
<li><a href="" target="blank">Home</a></li>
<li><a href="https://nationalize.io/">About</a></li>
<li><a href="https://nationalize.io/our-data">Data</a></li>
<li><a href="https://nationalize.io/use-cases">Use Cases</a></li>
<li><a href="https://store.genderize.io/">Store</a></li>
</ul>
`
document.body.append(navbar);

const title = document.createElement('div');
title.setAttribute("class","title");
title.innerHTML=`<p>Predict the nationality of a name</p>`
document.body.append(title)

const countryCode = {
    "AF": "Afghanistan",
    "AX": "Aland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua And Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia And Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Congo, Democratic Republic",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D\"Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (Malvinas)",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island & Mcdonald Islands",
    "VA": "Holy See (Vatican City State)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran, Islamic Republic Of",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle Of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KR": "Korea",
    "KP": "North Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People\"s Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libyan Arab Jamahiriya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia, Federated States Of",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestinian Territory, Occupied",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts And Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre And Miquelon",
    "VC": "Saint Vincent And Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome And Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia And Sandwich Isl.",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard And Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad And Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks And Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "WF": "Wallis And Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
  }

let container = document.createElement('div');
container.setAttribute("class","container");
document.body.append(container);

let inputContainer = document.createElement('div');
inputContainer.setAttribute("class","inputContainer");
inputContainer.innerHTML=`<input type="text" id="name" placeholder="Enter First Name" oninput="storeName(event)"> 
<button onclick="searchNation();">Find Nationality</button>`
container.append(inputContainer);

let displayContainer = document.createElement('div');
displayContainer.setAttribute("class","displayContainer");
container.append(displayContainer);




function storeName(event){
    let name = event.target.value;
    window.localStorage.setItem("Name",name);

}

async function searchNation(){
    

    let name = window.localStorage.getItem("Name");
    try {
    const data = await fetch(`https://api.nationalize.io?name=${name}`)
    const countries = await data.json()

    if(countries.country.length == 0){
        console.log("Try with other name");
        displayContainer.innerHTML=`<h2>Try with other name</h2>`

    }

    else if(countries.country.length == 1){
        let code = countries.country[0].country_id;
        let cn = countryCode[code];
        let n1 = countries.name;
        let p1 = (countries.country[0].probability).toFixed(2);
        console.log(cn);
        displayContainer.innerHTML=`<h3>Name : ${n1}</h3></br>
        <h3>Country : ${cn}</h3> &amp; 
        <h3>Probability : ${p1}</h3>`
        
        }
    else if(countries.country.length == 2){

        let a = countries.country[0].probability;
        let b = countries.country[1].probability;
        
        let n1 = countries.name;
        console.log(n1);

        let x = countries.country[0].country_id;
        let y = countries.country[1].country_id;
        let c1 = countryCode[x];
        let c2 = countryCode[y];
        console.log(c1);
        console.log(c2);

        let p1 = (a*100).toFixed(2) + " %";
        let p2 = (b*100).toFixed(2) + " %";
        console.log(p1);
        console.log(p2);

        displayContainer.innerHTML=`<h3>Name : ${n1}</h3></br>
        <h3>Country : ${c1}</h3> &amp; 
        <h3>Probability : ${p1}</h3></br>
        <h3>Country : ${c2}</h3> &amp; 
        <h3>Probability : ${p2}</h3>
        `

  
    } 
    else if(countries.country.length == 3){
        let a = countries.country[0].probability;
        let b = countries.country[1].probability;
        
        let n1 = countries.name;
        console.log(n1);

        let x = countries.country[0].country_id;
        let y = countries.country[1].country_id;
        let c1 = countryCode[x];
        let c2 = countryCode[y];
        console.log(c1);
        console.log(c2);

        let p1 = (a*100).toFixed(2) + " %";
        let p2 = (b*100).toFixed(2) + " %";
        console.log(p1);
        console.log(p2);

        displayContainer.innerHTML=`<h3>Name : ${n1}</h3></br>
        <h3>Country : ${c1}</h3> &amp; 
        <h3>Probability : ${p1}</h3></br>
        <h3>Country : ${c2}</h3> &amp; 
        <h3>Probability : ${p2}</h3>
        `

    }
    
    }
    catch (error) {
    displayContainer.innerHTML=`<h2>${error}</h2>`
    console.log(error);
    
    }

   



      
        

   
    

     

}




