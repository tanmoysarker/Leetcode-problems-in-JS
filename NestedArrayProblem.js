// I have a nested array object which is like: Now i will pass an Id in a function and need to match the Id from the array and change the value of selected to true or false

const nestedArray = [
    { name : 'Living room',
      item : 
        [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                title: "Light",
                titleStatus: 'Home Daytime',
                image: Images.light,
                imageDark: Images.lightDark,
                selected: false
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                title: "Climate",
                titleStatus: '17',
                image: Images.meter,
                imageDark: Images.meterDark,
                selected: false
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                title: "Ventilation",
                titleStatus: 'Auto',
                image: Images.ventilation,
                imageDark: Images.ventilationDark,
                selected: false
            }
        ]
        
    },
    { name: 'Kitchen',
      item :
        [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba",
                title: "Light",
                titleStatus: 'Home Daytime',
                image: Images.light,
                imageDark: Images.lightDark,
                selected: false
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-cdbd91aa97f63",
                title: "Climate",
                titleStatus: '17',
                image: Images.meter,
                imageDark: Images.meterDark,
                selected: false
            },
            {
                id: "58694a0f-3da1-471f-bd96-145vdf571e29d72",
                title: "Ventilation",
                titleStatus: 'Auto',
                image: Images.ventilation,
                imageDark: Images.ventilationDark,
                selected: false
            }
        ]
        
    },
    { name : 'Master bedroom',
      item  : 
        [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad5xx3abb28ba",
                title: "Light",
                titleStatus: 'Home Daytime',
                image: Images.light,
                imageDark: Images.lightDark,
                selected: false
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbdss91aa97f63",
                title: "Climate",
                titleStatus: '17',
                image: Images.meter,
                imageDark: Images.meterDark,
                selected: false
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571eaa29d72",
                title: "Ventilation",
                titleStatus: 'Auto',
                image: Images.ventilation,
                imageDark: Images.ventilationDark,
                selected: false
            }
        ]
        
    },
    { name : 'Kids bedroom',
      item  : 
        [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abbkk28ba",
                title: "Light",
                titleStatus: 'Home Daytime',
                image: Images.light,
                imageDark: Images.lightDark,
                selected: false
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91kkaa97f63",
                title: "Climate",
                titleStatus: '17',
                image: Images.meter,
                imageDark: Images.meterDark,
                selected: false
            },
            {
                id: "58694a0f-3da1-471f-bd96-14557331e29d72",
                title: "Ventilation",
                titleStatus: 'Auto',
                image: Images.ventilation,
                imageDark: Images.ventilationDark,
                selected: false
            }
        ]
        
    },

];




// Solution



const nestedArray=[{name:"Living room",item:[{id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",title:"Light",titleStatus:"Home Daytime",selected:!1},{id:"3ac68afc-c605-48d3-a4f8-fbd91aa97f63",title:"Climate",titleStatus:"17",selected:!1},{id:"58694a0f-3da1-471f-bd96-145571e29d72",title:"Ventilation",titleStatus:"Auto",selected:!1}]},{name:"Kitchen",item:[{id:"bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba",title:"Light",titleStatus:"Home Daytime",selected:!1},{id:"3ac68afc-c605-48d3-a4f8-cdbd91aa97f63",title:"Climate",titleStatus:"17",selected:!1},{id:"58694a0f-3da1-471f-bd96-145vdf571e29d72",title:"Ventilation",titleStatus:"Auto",selected:!1}]},{name:"Master bedroom",item:[{id:"bd7acbea-c1b1-46c2-aed5-3ad5xx3abb28ba",title:"Light",titleStatus:"Home Daytime",selected:!1},{id:"3ac68afc-c605-48d3-a4f8-fbdss91aa97f63",title:"Climate",titleStatus:"17",selected:!1},{id:"58694a0f-3da1-471f-bd96-145571eaa29d72",title:"Ventilation",titleStatus:"Auto",selected:!1}]},{name:"Kids bedroom",item:[{id:"bd7acbea-c1b1-46c2-aed5-3ad53abbkk28ba",title:"Light",titleStatus:"Home Daytime",selected:!1},{id:"3ac68afc-c605-48d3-a4f8-fbd91kkaa97f63",title:"Climate",titleStatus:"17",selected:!1},{id:"58694a0f-3da1-471f-bd96-14557331e29d72",title:"Ventilation",titleStatus:"Auto",selected:!1}]}];

function changeSelected(id) {
  for (const { item } of nestedArray) {
    const found = item.find(obj => obj.id === id);
    if (found) {
      found.selected = !found.selected;
      break;
    }
  }
}

changeSelected('bd7acbea-c1b1-46c2-aed5-3ad53abbkk28ba');

console.log(nestedArray);