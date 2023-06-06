window.fetch("https://api.github.com/users")
.then((x)=>x.json())
.then((x)=>{
    console.log(x);
    x.map((x)=>{
        console.log(x);
        let demo=document.getElementById('demo')
        console.log(demo);
        let table=""
        table+=`
        <tr>
        <td>${x.login}</td>
        <td>${x.id}</td>
        <td><img src=${x.avatar_url} /></td>
        </tr>`
        demo.innerHTML+=table
    })
})

window.fetch("demo.json")
.then((x1)=>x1.json())
.then((x1)=>{
    console.log(x1);
    x1.map((x1)=>{
        console.log(x1);
        let demo1=document.getElementById('demo1');
        console.log(demo1);
        let table1=""
        table1+=`
        <tr>
            <td>${x1.name}</td>
            <td>${x1.id}</td>
            <td><img src=${x1.url} /></td>
        </tr>
        `
        demo1.innerHTML+=table1
    })
})

window.fetch("https://corona.lmao.ninja/v3/covid-19/countries")
.then((x2)=> x2.json())
.then((x2)=>{
    console.log(x2);
    x2.map((x2)=>{
        console.log(x2);
        let covid=document.getElementById('covid');
        console.log(covid);
        let table2=""
        table2+=`
        <tr>
            <td>${x2.active}</td>
            <td>${x2.country}</td>
            <td>${x2.deaths}</td>
            <td>${x2.population}</td>
            <td>${x2.recovered}</td>
            <td>${x2.cases}</td>
            <td>${x2.continent}</td>
        </tr>
        `
        covid.innerHTML+=table2
    })
})


window.fetch("contries.json")
.then((x3)=> x3.json())
.then((x3)=>{
    console.log(x3);
    x3.map((x3)=>{
        console.log(x3);
        let datalist=document.getElementById('select')
        console.log(datalist);
        let option=""
        option+=`
            <option value=${x3.country} >${x3.country}</option>
        `
        datalist.innerHTML+=option
    })
})


window.fetch('https://fakestoreapi.com/products')
.then((x4)=> x4.json())
.then((x4)=>{
    console.log(x4);
    x4.map((x4)=>{
        console.log(x4);
        let store=document.getElementById('store')
        let product=""
        product+=`
            <tr>
                <td>${x4.category}</td>
                <td><img src= ${x4.image} /></td>
                <td>${x4.price}</td>
                <td>${x4.title}</td>
            </tr>
        `
        store.innerHTML+=product
    })
})

