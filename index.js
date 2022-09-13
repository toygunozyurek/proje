let myCars = [
    {
        "id": "1",
        "title": "Honda",
        "image": "https://www.carlogos.org/car-logos/honda-logo.png",
        "vites_type": [
            "Manuel",
            "Automatic"
        ],
        "infos": {
            "km": "69000",
            "price": "484750",
            "year": "2013",
            "model": "Civic",
            "color": "Yellow"
        }
    },
    {   "id": "2",
        "title": "Tesla",
        "image": "https://www.carlogos.org/car-logos/tesla-logo.png",
        "vites_type": [
            "Manuel",
            "Automatic"
        ],
        "infos": {
            "km": "130000",
            "price": "1875000",
            "year": "2016",
            "model": "Model S",
            "color": "Blue"
        }
    },
    {   "id": "3",
        "title": "Porsche",
        "image": "https://www.carlogos.org/car-logos/porsche-logo.png",
        "vites_type": [
            "Manuel",
            "Automatic"
        ],
        "infos": {
            "km": "130000",
            "price": "990000",
            "year": "2007",
            "model": "Cayenne",
            "color": "Black"
        }
    },
    {   "id": "4",
        "title": "Bentley",
        "image": "https://www.carlogos.org/car-logos/bentley-logo.png",
        "vites_type": [
            "Manuel",
            "Automatic"
        ],
        "infos": {
            "km": "45000",
            "price": " 5750000",
            "year": "2013",
            "model": "Continental",
            "color": "Green"
        }
    },
    {   "id": "5",
        "title": "Maserati",
        "image": "https://www.carlogos.org/car-logos/maserati-logo.png",
        "vites_type": [
            "Manuel",
            "Automatic"
        ],
        "infos": {
            "km": "182000",
            "price": " 2650000",
            "year": "2014",
            "model": "Ghibli",
            "color": "Orange"
        }
    },
    {   "id": "6",
        "title": "Jeep",
        "image": "https://www.carlogos.org/car-logos/jeep-logo.png",
        "vites_type": [
            "Manuel",
            "Automatic"
        ],
        "infos": {
            "km": "160000",
            "price": "1350000",
            "year": "2014",
            "model": "Cherokee",
            "color": "Pink"
        }
    }
]; 














function initApp(){
    let carBrands = document.querySelector(".row");   
    myCars.forEach(function(item,index){
        carBrands.innerHTML += `
        <div class="col-6 mt-5 d-flex justify-content-center">
                <div class="card " >
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.title}</h5>
                    </div>    
                    <img src="${item.image}" alt="">
                    <div class="check-container">
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="${item.id}_${item.title}_${index}_m" name="optradio" value="option1" checked>
                            <label class="form-check-label" for="${item.id}_${item.title}_${index}_m">${item.vites_type[0]}</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="${item.id}_${item.title}_${index}_a" name="optradio" value="option2">
                            <label class="form-check-label" for="${item.id}_${item.title}_${index}_a">${item.vites_type[1]}</label>
                        </div>
                    </div> 
                    <ul>
                        KM:${item.infos.km}<br>
                        PRICE: ${item.infos.price} TL<br>
                        YEAR: ${item.infos.year}<br>
                        MODEL: ${item.infos.model}<br>
                        COLOR: ${item.infos.color}
                    </ul>   
                </div>
            </div> 
        `   
    })
}


initApp()





