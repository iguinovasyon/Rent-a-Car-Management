class User {
    constructor(UserId, UserName, SurName, Age, Gender, DriverLicenseType, status) {
        this.UserId = UserId;
        this.UserName = UserName;
        this.SurName = SurName;
        this.Age = Age;
        this.status = status;
        this.Gender = Gender;
        this.DriverLicenseType = DriverLicenseType;
        this.rentACars = [];
    }

}
class Car {
    constructor(CarId, Brand, BrandType, Color, DailyPrice) {
        this.CarId = CarId;
        this.Brand = Brand;
        this.Color = Color;
        this.DailyPrice = DailyPrice;
        this.BrandType = BrandType;
        this.Status = true;
    }
}
class LeasedVehicles {
    constructor(LeasedVehiclesId, User, Car, TotalDays, Price) {
        this.LeasedVehiclesId = LeasedVehiclesId;
        this.User = User;
        this.Car = Car;
        this.TotalDays = TotalDays;
        this.Price = Price;
        this.rentACars = [];
    }
    addCar(RentCar) {
        this.rentACars.push(RentCar);
    }
}

var carId = 0;
var userId = 0;
var leasedVehiclesId = 0;

const CarList = [];
const UserList = [];
const LeasedVehics = [];
function addCar() {
    const CarBrand = document.getElementById("CarBrand").value;
    const Color = document.getElementById("CarColor").value;
    const DailyPrice = document.getElementById("CarPrice").value;
    const CarBrandType = document.getElementById("CarBrandType").value;

    carId++;
    const car = new Car(carId, CarBrand, CarBrandType,Color, DailyPrice);
    CarList.push(car);
    const carlist = document.getElementById("carlist");
    carlist.innerHTML = "";
    CarList.forEach((car) => {
        const tr = document.createElement("tr");
        const thId = document.createElement("td");
        const th = document.createElement("td");
        const th1 = document.createElement("td");
        const th2 = document.createElement("td");
        const th3 = document.createElement("td");
        const thStatus = document.createElement("td");

        thId.innerText = car.CarId;
        th.innerText = car.Brand;
        th1.innerText = car.BrandType;
        th2.innerText = car.Color;
        th3.innerText = car.DailyPrice;
 
        if (car.Status == true) thStatus.innerText = "Araç Kiralanabilir"
        else thStatus.innerText = "Araç Kiralanamaz"

        tr.appendChild(thId);
        tr.appendChild(th);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(thStatus);


        carlist.appendChild(tr);

        var number = 0
    });
    document.getElementById("CarBrand").value = "";
    document.getElementById("CarBrandType").value = "";
    document.getElementById("CarColor").value = "";
    document.getElementById("CarPrice").value = "1000";
    document.getElementById("CarBrand").focus();

    carDropdownRefresh();
}
function carDropdownRefresh() {
    const selectCar = document.getElementById("cars");

    selectCar.innerHTML = `<option disabled value selected> -- Select Car --</option>`;

    CarList.forEach((car) => {
        const option = document.createElement("option");
        option.value = car.Brand;
        option.innerText = car.Brand;

        selectCar.add(option);
    });
}
document.getElementById("addCar").addEventListener("click", (e) => {
    //bu komutu anlamadım.
    e.preventDefault();
    addCar();
});
carDropdownRefresh();