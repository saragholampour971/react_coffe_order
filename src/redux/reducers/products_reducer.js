import chaiigoli from '../../components/products/chaiigoli.jpg';
import capuchino from '../../components/products/capuchino.jpg';
import chaii from '../../components/products/chaii.jpg';
import cookie from '../../components/products/cookie.jpg';
import cupcake from '../../components/products/cupcake.jpg';
import hotchocolate from '../../components/products/hotchocolate.jpg';
import icelatte from '../../components/products/icelatte.jpg';
import icemuka from '../../components/products/icemuka.jpg';
import latte from '../../components/products/latte.jpg';
import milk from '../../components/products/milk.jpg';
import nescafe from '../../components/products/nescafe.jpg';


const firststate = [
    { cost:12000,
      id: Math.floor(Math.random()*1000),
     name:"دمنوش",
    pic: chaiigoli,
     },
    { cost:13000,
      id: Math.floor(Math.random()*1000),
     name:"چایی",
        pic: chaii,
      },
    { cost:12000,
      id: Math.floor(Math.random()*1000),
     name:"کوکی",
        pic: cookie,
      },
    { cost:30000,
      id: Math.floor(Math.random()*1000),
     name:"کاپ کیک",
        pic: cupcake, 
     },
    { cost:12000,
      id: Math.floor(Math.random()*1000),
     name:"کاپوچینو",
        pic: capuchino,
     },
    { cost:12000,
      id: Math.floor(Math.random()*1000),
     name:"هات چاکلت",
        pic: hotchocolate,
     },
    { cost:17000,
      id: Math.floor(Math.random()*1000),
     name:"آیس لته",
        pic: icelatte,
     },
    { cost:12000,
      id: Math.floor(Math.random()*1000),
     name:"آیس موکا",
        pic: icemuka,
     },
    { cost:15000,
      id: Math.floor(Math.random()*1000),
     name:"لته",
        pic: latte,
     },
    { cost:12000,
      id: Math.floor(Math.random()*1000),
     name:"شیر",
        pic: milk,
     },
    { cost:19000,
      id: Math.floor(Math.random()*1000),
     name:"نسکافه",
        pic: nescafe,
     }
   
    
]

export const Products_Reducer = (state = firststate, action) => {
    switch (action.type) {
        case "Print_Pdoducts":
            return [...action.payload];
        case "Add_Reducer":
            return [...action.payload];
        default:
            return state;
    }
}