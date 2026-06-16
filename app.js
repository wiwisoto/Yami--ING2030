
const YAMI_USER = { username: "yami", password: "hola" };
const childProfile = {
  name: "Tomás", age: 7, sex: "Hombre", heightCm: 120, weightKg: 25,
  albumCode: "YAMI-POLLO-001", comuna: "Santiago",
  tastes: ["sabores suaves", "limón", "hierbas suaves", "texturas doraditas", "cocinar en familia"]
};
const parentProfile = { name: "Viviana Soto", role: "Apoderada", plan: "Cuenta familiar Yami", goal: "Aprender a cocinar preparaciones saludables para niños y niñas" };
const dailyRefs = { energy: 1600, protein: +(childProfile.weightKg * 0.95).toFixed(1), carbs: 130, fat: 50, fiber: 18 };
const albumItems = [
  {id:"plancha", name:"Pollo a la plancha", img:"assets/lamina-plancha.png", active:true},
  {id:"horno", name:"Pollo al horno", img:"assets/lamina-horno.png"},
  {id:"vapor", name:"Pollo al vapor", img:"assets/lamina-vapor.png"},
  {id:"hervido", name:"Pollo hervido", img:"assets/lamina-hervido.png"},
  {id:"airfryer", name:"Pollo en air fryer", img:"assets/lamina-airfryer.png"},
  {id:"salteado", name:"Pollo salteado", img:"assets/lamina-salteado.png"},
  {id:"grillado", name:"Pollo grillado", img:"assets/lamina-grillado.png"},
  {id:"hierbas", name:"Pollo a las hierbas", img:"assets/lamina-hierbas.png"},
  {id:"limon", name:"Pollo al limón", img:"assets/lamina-limon.png"},
  {id:"livianito", name:"Pollo Livianito", img:"assets/lamina-livianito.png", special:true}
];
const foodDB = {
  chicken:{unit:"100 g", energy:165, protein:31, carbs:0, fat:3.6, fiber:0},
  brownRice:{unit:"100 g", energy:123, protein:2.7, carbs:25.6, fat:1, fiber:1.6},
  tomato:{unit:"100 g", energy:18, protein:.9, carbs:3.9, fat:.2, fiber:1.2},
  oliveOilTsp:{unit:"1 cdta", energy:40, protein:0, carbs:0, fat:4.5, fiber:0},
  tortilla:{unit:"1 unidad", energy:110, protein:4, carbs:20, fat:2.5, fiber:3.5},
  avocado:{unit:"100 g", energy:160, protein:2, carbs:8.5, fat:14.7, fiber:6.7},
  lettuce:{unit:"100 g", energy:15, protein:1.4, carbs:2.9, fat:.2, fiber:1.3},
  yogurt:{unit:"100 g", energy:59, protein:10, carbs:3.6, fat:.4, fiber:0},
  sweetPotato:{unit:"100 g", energy:86, protein:1.6, carbs:20.1, fat:.1, fiber:3},
  carrot:{unit:"100 g", energy:41, protein:.9, carbs:10, fat:.2, fiber:2.8},
  milk:{unit:"100 ml", energy:42, protein:3.4, carbs:5, fat:1, fiber:0},
  pepper:{unit:"100 g", energy:31, protein:1, carbs:6, fat:.3, fiber:2.1},
  zucchini:{unit:"100 g", energy:17, protein:1.2, carbs:3.1, fat:.3, fiber:1},
  couscous:{unit:"100 g", energy:112, protein:3.8, carbs:23, fat:.2, fiber:1.4},
  quinoa:{unit:"100 g", energy:120, protein:4.4, carbs:21.3, fat:1.9, fiber:2.8},
  cucumber:{unit:"100 g", energy:15, protein:.7, carbs:3.6, fat:.1, fiber:.5},
  corn:{unit:"100 g", energy:96, protein:3.4, carbs:21, fat:1.5, fiber:2.4}
};
const recipes = [
  { id:"arroz-tomate", title:"Pollo a la plancha con arroz integral y tomatitos", time:"20 min", difficulty:1, level:"Fácil", short:"Una opción rápida para un almuerzo cotidiano. El arroz entrega energía y el tomate aporta frescura.",
    flavors:["limón", "orégano", "tomate", "sabor doradito"],
    ingredients:["60 g de pollo a la plancha", "80 g de arroz integral cocido", "50 g de tomatitos o tomate picado", "1 cucharadita de aceite de oliva", "limón, orégano y sal moderada"],
    amounts:{chicken:60,brownRice:80,tomato:50,oliveOilTsp:1},
    contributes:"Aporta proteína para músculos y crecimiento, carbohidratos para energía de juego y una pequeña cantidad de grasa saludable del aceite de oliva.",
    steps:["Cocina el arroz integral con anticipación o usa arroz ya cocido.","Seca el pollo y condimenta con limón, orégano y una pizca muy moderada de sal.","Calienta la plancha con el aceite y cocina el pollo por ambos lados hasta que esté bien cocido.","Sirve el pollo cortado en tiritas junto al arroz y los tomatitos."] },
  { id:"wrap-palta", title:"Tiritas de pollo con wrap integral y palta", time:"18 min", difficulty:2, level:"Fácil media", short:"Formato entretenido para niños porque se puede enrollar y comer con las manos.",
    flavors:["palta", "yogur suave", "lechuga fresca", "tortilla integral"],
    ingredients:["55 g de pollo a la plancha en tiritas", "1 tortilla integral pequeña", "30 g de palta", "30 g de lechuga", "20 g de yogur natural como salsa suave"],
    amounts:{chicken:55,tortilla:1,avocado:30,lettuce:30,yogurt:20},
    contributes:"Combina proteína del pollo, carbohidratos de la tortilla, grasas saludables de la palta y fibra de la tortilla integral y verduras.",
    steps:["Cocina el pollo a la plancha y córtalo en tiritas pequeñas.","Calienta la tortilla unos segundos para que sea más flexible.","Unta yogur natural, agrega lechuga, palta y el pollo.","Enrolla firme y corta por la mitad para que sea fácil de tomar."] },
  { id:"camote", title:"Pollo doradito con puré de camote", time:"30 min", difficulty:3, level:"Media", short:"Más suave y cremoso. Funciona bien cuando el niño prefiere texturas blandas.",
    flavors:["camote", "zanahoria", "textura cremosa", "sabor suave"],
    ingredients:["60 g de pollo a la plancha", "100 g de camote cocido", "40 g de zanahoria cocida", "30 ml de leche", "1 cucharadita de aceite de oliva"],
    amounts:{chicken:60,sweetPotato:100,carrot:40,milk:30,oliveOilTsp:1},
    contributes:"El pollo entrega proteína; el camote y la zanahoria aportan energía, fibra y color natural; la leche suma cremosidad y algo de calcio.",
    steps:["Cuece el camote y la zanahoria hasta que estén blandos.","Muele con leche tibia hasta formar un puré suave.","Condimenta el pollo con especias suaves y cocínalo a la plancha.","Sirve el pollo en trozos pequeños sobre una porción de puré."] },
  { id:"brochetas", title:"Brochetas de pollo con verduras arcoíris", time:"35 min", difficulty:4, level:"Media alta", short:"Más lúdica y colorida. Ideal para que el niño reconozca colores y pruebe verduras de a poco.",
    flavors:["pimentón", "zapallo italiano", "cuscús", "verduras arcoíris"],
    ingredients:["70 g de pollo a la plancha en cubos", "60 g de pimentones de colores", "50 g de zapallo italiano", "70 g de cuscús cocido", "1 cucharadita de aceite de oliva"],
    amounts:{chicken:70,pepper:60,zucchini:50,couscous:70,oliveOilTsp:1},
    contributes:"Entrega proteína, energía y variedad de verduras. El cuscús ayuda a completar el plato con carbohidratos blandos y fáciles de comer.",
    steps:["Corta el pollo en cubos pequeños y las verduras en trozos similares.","Arma brochetas alternando pollo, pimentón y zapallo italiano.","Cocina a la plancha girando con cuidado hasta que el pollo esté cocido.","Acompaña con cuscús y corta la brocheta antes de servir a niños pequeños."] },
  { id:"quinoa-yogur", title:"Pollo a la plancha con quinoa y salsa de yogur", time:"42 min", difficulty:5, level:"Más desafiante", short:"La opción más completa del set. Tiene más pasos y mezcla proteína, cereal, verduras y salsa suave.",
    flavors:["quinoa", "pepino", "yogur suave", "limón"],
    ingredients:["65 g de pollo a la plancha", "80 g de quinoa cocida", "50 g de pepino picado", "40 g de yogur natural", "media cucharadita de aceite de oliva"],
    amounts:{chicken:65,quinoa:80,cucumber:50,yogurt:40,oliveOilTsp:.5},
    contributes:"Aporta proteína del pollo y del yogur, carbohidratos de la quinoa, grasas en baja cantidad y frescura de pepino. Es una receta larga, pero muy educativa.",
    steps:["Lava la quinoa y cuécela hasta que esté blanda.","Mezcla yogur natural con gotas de limón y hierbas suaves.","Cocina el pollo a la plancha y deja reposar antes de cortar.","Sirve quinoa, pepino, pollo y salsa de yogur por encima.","Pide al niño que elija dónde poner la salsa para hacerlo más participativo."] }
];
function isPublicPage(){const p=location.pathname.split('/').pop()||'index.html';return p==='index.html'}
function requireLogin(){if(!isPublicPage() && localStorage.getItem('yamiLoggedIn')!=='true') location.href='index.html'}
function logout(){localStorage.removeItem('yamiLoggedIn');location.href='index.html'}
function setupLogin(){const form=document.querySelector('#loginForm');if(!form)return;if(localStorage.getItem('yamiLoggedIn')==='true')document.querySelector('#alreadyIn')?.classList.remove('hide');form.addEventListener('submit',e=>{e.preventDefault();const username=document.querySelector('#username').value.trim();const password=document.querySelector('#password').value.trim();const error=document.querySelector('#loginError');if(username===YAMI_USER.username&&password===YAMI_USER.password){localStorage.setItem('yamiLoggedIn','true');location.href='home.html'}else error.classList.add('show')})}
function getRatings(){try{return JSON.parse(localStorage.getItem('yamiRecipeRatings')||'{}')}catch{return {}}}
function setRating(id,value){const ratings=getRatings();ratings[id]=value;localStorage.setItem('yamiRecipeRatings',JSON.stringify(ratings));}
function ratingSummary(){const ratings=getRatings();return Object.entries(ratings).map(([id,value])=>({recipe:recipes.find(r=>r.id===id),value})).filter(x=>x.recipe).sort((a,b)=>b.value-a.value)}
function fillProfile(){const profile=document.querySelector('#profileData');if(!profile)return;const rated=ratingSummary();let tastes=[...childProfile.tastes];const lovedFlavors=[];rated.filter(x=>x.value>=4).forEach(x=>{(x.recipe.flavors||[]).forEach(flavor=>{if(!lovedFlavors.includes(flavor))lovedFlavors.push(flavor)})});tastes=[...new Set([...tastes,...lovedFlavors])];const ratingHtml = rated.length ? rated.slice(0,3).map(x=>`<div><span>${x.recipe.title}</span><strong>${x.value}/5 plantitas</strong></div>`).join('') : '<p>Aún no hay recetas calificadas. Cuando califiques una receta, aparecerá aquí.</p>';
profile.innerHTML=`<div class="info-card card profile-card"><div class="avatar"><img src="assets/personaje-yamito-transparente.png" alt="Personaje Yami"></div><div><span class="kicker">Perfil familiar</span><h2>${parentProfile.name}</h2><p><strong>${parentProfile.role}</strong>. ${parentProfile.goal}.</p><div class="pill-row"><span class="pill">${parentProfile.plan}</span><span class="pill">Usuario: yami</span></div></div></div><div class="grid cols-4"><div class="stat"><b>${childProfile.name}</b><span>Nombre del hijo</span></div><div class="stat"><b>${childProfile.age} años</b><span>Edad</span></div><div class="stat"><b>${childProfile.weightKg} kg</b><span>Peso</span></div><div class="stat"><b>${dailyRefs.protein} g/día</b><span>Proteína estimada</span></div></div><div class="grid cols-2"><div class="info-card card"><h3>Datos básicos</h3><p>Sexo: ${childProfile.sex}<br>Estatura: ${childProfile.heightCm} cm<br>Comuna: ${childProfile.comuna}<br>Código de álbum: ${childProfile.albumCode}</p></div><div class="info-card card"><h3>Gustos registrados</h3><div class="pill-row">${tastes.map(t=>`<span class="pill">${t}</span>`).join('')}</div></div></div><div class="info-card card"><h3>Recetas mejor calificadas</h3><div class="rating-summary">${ratingHtml}</div></div>`}
function fillAlbum(){const grid=document.querySelector('#albumGrid');if(!grid)return;grid.innerHTML=albumItems.map((item,idx)=>{const href=item.active?'recetas-plancha.html':'#';const cls=`sticker-card ${item.special?'special':''} ${item.active?'':'disabled-card'}`;return`<a class="${cls}" href="${href}" aria-label="${item.name}"><img src="${item.img}" alt="${item.name}"><span class="num">${idx+1}</span>${item.special?'<span class="special-badge">Especial</span>':''}<span class="tag">${item.name}</span></a>`}).join('')}
function calculate(amounts){const total={energy:0,protein:0,carbs:0,fat:0,fiber:0};Object.entries(amounts).forEach(([key,qty])=>{const unit=foodDB[key]; if(!unit)return; const factor=key==='oliveOilTsp'||key==='tortilla'?qty:qty/100; Object.keys(total).forEach(k=>{total[k]+=unit[k]*factor})});return{energy:Math.round(total.energy),protein:+total.protein.toFixed(1),carbs:+total.carbs.toFixed(1),fat:+total.fat.toFixed(1),fiber:+total.fiber.toFixed(1)}}
function leafMeter(count){let html='<span class="leaf-meter" aria-hidden="true">';for(let i=1;i<=5;i++){html+=`<span class="leaf ${i<=count?'on':''}"></span>`}return html+'</span>'}
function macroRows(n){const defs=[['energy','Energía',n.energy,'kcal',dailyRefs.energy],['protein','Proteína',n.protein,'g',dailyRefs.protein],['carbs','Carbohidratos',n.carbs,'g',dailyRefs.carbs],['fat','Grasas',n.fat,'g',dailyRefs.fat],['fiber','Fibra',n.fiber,'g',dailyRefs.fiber]];return defs.map(([key,label,val,unit,ref])=>{const pct=Math.round((val/ref)*100);const width=Math.min(pct,100);return`<div class="macro-row"><label>${label}</label><div class="track"><span class="fill ${key}" style="width:${width}%"></span></div><span>${pct}%</span></div>`}).join('')}
function fillRecipes(){const target=document.querySelector('#recipesList');if(!target)return;document.querySelector('#proteinNeedText').textContent=`${dailyRefs.protein} g/día`;document.querySelector('#childSummary').textContent=`${childProfile.age} años, ${childProfile.sex.toLowerCase()}, ${childProfile.heightCm} cm y ${childProfile.weightKg} kg`;const ratings=getRatings();target.innerHTML=recipes.map((recipe,index)=>{const n=calculate(recipe.amounts);const current=ratings[recipe.id]||0;return`<article class="recipe-card card" id="recipe-${recipe.id}"><div class="recipe-top"><div><div class="recipe-title">${index+1}. ${recipe.title}</div><p>${recipe.short}</p></div><div class="meta"><span>${recipe.time}</span><span>${recipe.level}</span></div></div><div class="difficulty"><span>Dificultad:</span>${leafMeter(recipe.difficulty)}<span>${recipe.difficulty}/5</span></div><div class="recipe-summary"><div class="ingredients"><h3>Ingredientes</h3><ul>${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul></div><div class="contribution"><h3>Qué aporta</h3><p>${recipe.contributes}</p><div class="bars">${macroRows(n)}</div></div></div><div class="recipe-actions"><button class="secondary-btn" type="button" data-toggle="${recipe.id}">Ver preparación detallada</button></div><div class="details-panel" id="details-${recipe.id}"><h3>Preparación paso a paso</h3><ol class="steps">${recipe.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="rating-box"><strong>Califica esta receta para actualizar los sabores favoritos del perfil</strong><div class="rating-buttons" data-rating="${recipe.id}">${[1,2,3,4,5].map(v=>`<button class="rating-btn ${current===v?'selected':''}" type="button" data-value="${v}" aria-label="Calificar con ${v} plantitas"><span class="leaf on"></span></button>`).join('')}</div></div></div></article>`}).join('');target.querySelectorAll('[data-toggle]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector(`#details-${btn.dataset.toggle}`)?.classList.toggle('open')}));target.querySelectorAll('[data-rating]').forEach(box=>box.addEventListener('click',e=>{const btn=e.target.closest('button[data-value]');if(!btn)return;setRating(box.dataset.rating,Number(btn.dataset.value));box.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected')}))}
document.addEventListener('DOMContentLoaded',()=>{requireLogin();setupLogin();fillProfile();fillAlbum();fillRecipes();document.querySelectorAll('[data-logout]').forEach(btn=>btn.addEventListener('click',logout));});
