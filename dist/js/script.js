class User {
    constructor(UserId, UserName, SurName, Gender, DriverLicenseType, userAge) {
        this.UserId = UserId;
        this.UserName = UserName;
        this.SurName = SurName;
        this.status = true;
        this.Gender = Gender;
        this.DriverLicenseType = DriverLicenseType;
        this.Age = userAge;
        this.rentACars = [];
        this.userAge=userAge;
    }

}
class Car {
    constructor(CarId, Brand, BrandType, Color, DailyPrice, Status) {
        this.CarId = CarId;
        this.Brand = Brand;
        this.Color = Color;
        this.DailyPrice = DailyPrice;
        this.BrandType = BrandType;
        this.Status = Status;
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

var carId = 10;
var userId = 10;
var leasedVehiclesId = 0;

const CarList = [{ CarId: 1, Brand: "Bmw", BrandType: "520i", Color: "Sarı", DailyPrice: 1000, Status: true },
{ CarId: 2, Brand: "Fiat", BrandType: "Egea", Color: "Siyah", DailyPrice: 500, Status: true },
{ CarId: 3, Brand: "Mercedes", BrandType: "Benz", Color: "Beyaz", DailyPrice: 4000, Status: true },
{ CarId: 4, Brand: "Togg", BrandType: "Sedan", Color: "Gemlik", DailyPrice: 10000, Status: true }
    , { CarId: 5, Brand: "Ferrari", BrandType: "599x", Color: "Kırmızı", DailyPrice: 20000, Status: true }
    , { CarId: 6, Brand: "Ford", BrandType: "Mastenk", Color: "Siyah", DailyPrice: 1000, Status: true }
    , { CarId: 7, Brand: "Volkswagen", BrandType: "Caddy", Color: "Mor", DailyPrice: 2000, Status: true }
    , { CarId: 8, Brand: "Volkswagen", BrandType: "Passat", Color: "Aşiret Paket", DailyPrice: 4000, Status: true }
    , { CarId: 9, Brand: "Volvo", BrandType: "xc90", Color: "Mavi", DailyPrice: 7000, Status: true }
    , { CarId: 10, Brand: "Murat", BrandType: "131", Color: "Beyaz", DailyPrice: 200, Status: true }];
const UserList = [{ UserId: 1, UserName: "Umut", SurName: "Tosun", Gender: "Erkek", DriverLicenseType: "var", userAge: 18 },
{ UserId: 2, UserName: "Kubilay Ege", SurName: "Sezer", Gender: "Erkek", DriverLicenseType: "var", userAge: 21 },
{ UserId: 3, UserName: "Muhammet", SurName: "Çelikçi", Gender: "Erkek", DriverLicenseType: "var", userAge: 31 },
{ UserId: 4, UserName: "İsmail", SurName: "Can Karataş", Gender: "Erkek", DriverLicenseType: "var", userAge: 68 },
{ UserId: 5, UserName: "Adem", SurName: "Eraslan", Gender: "Erkek", DriverLicenseType: "var", userAge: 25 },
{ UserId: 6, UserName: "Onur", SurName: "Işık", Gender: "Erkek", DriverLicenseType: "var", userAge: 23 },
{ UserId: 7, UserName: "Burak", SurName: "Taha", Gender: "Erkek", DriverLicenseType: "var", userAge: 18 },
{ UserId: 8, UserName: "Alperen", SurName: "yigit", Gender: "Erkek", DriverLicenseType: "var", userAge: 28 },
{ UserId: 9, UserName: "Yiğit", SurName: "Özdemir", Gender: "Erkek", DriverLicenseType: "var", userAge: 22 },
{ UserId: 10, UserName: "Can", SurName: "Tarakçı", Gender: "Erkek", DriverLicenseType: "var", userAge: 20 }];
const LeasedVehics = [];

function addCar() {
    const CarBrand = document.getElementById("CarBrand").value;
    const Color = document.getElementById("CarColor").value;
    const DailyPrice = document.getElementById("CarPrice").value;
    const CarBrandType = document.getElementById("CarBrandType").value;
    carId++;
    const car = new Car(carId, CarBrand, CarBrandType, Color, DailyPrice, true);
    CarList.push(car);

    printCars();

    document.getElementById("CarBrand").value = "";
    document.getElementById("CarBrandType").value = "";
    document.getElementById("CarColor").value = "";
    document.getElementById("CarPrice").value = "1000";
    document.getElementById("CarBrand").focus();

    carDropdownRefresh();
    swal("Araç Eklendi!", "Araç Başarıyla Eklendi!", "success");
}
function printCars() {
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
}
function printUsers(){
    document.getElementById('userList').innerHTML = "";
    UserList.forEach((user) => {
        const row = document.createElement('tr');
        const tableDataId = document.createElement('td');
        const tableDataName = document.createElement('td');
        const tableDataSurName = document.createElement('td');
        const tableDataGender = document.createElement('td');
        const tableDataDriverLicenseStatus = document.createElement('td');
        const tableDatauserAge = document.createElement('td');

        tableDataId.innerText = user.UserId;
        tableDataName.innerText = user.UserName;
        tableDataSurName.innerText = user.SurName;
        tableDataGender.innerText = user.Gender;
        tableDataDriverLicenseStatus.innerText = user.DriverLicenseType;
        tableDatauserAge.innerText = user.userAge;

        row.appendChild(tableDataId);
        row.appendChild(tableDataName);
        row.appendChild(tableDataSurName);
        row.appendChild(tableDataGender);
        row.appendChild(tableDataDriverLicenseStatus);
        row.appendChild(tableDatauserAge);

        document.getElementById('userList').appendChild(row);
    })
    userDropdownRefresh();
}
function addCustomer() {
    const name = document.getElementById('name').value;
    const surName = document.getElementById('surName').value;
    const gender = document.getElementById('gender').value;
    const driveLicense = document.getElementById('driverLicense').value;
    const userAge = document.getElementById('userAge').value

    userId++;

    const user = new User(userId, name, surName, gender, driveLicense, userAge)

    UserList.push(user);

    printUsers();
    swal("Müşteri Eklendi!", "Müşteri Başarıyla Eklendi!", "success");
    document.getElementById('name').value = "";
    document.getElementById('surName').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('userAge').value = "18";
}
function addRentACar() {
    const customer = document.getElementById('users').value;
    const carId = document.getElementById('cars').value;
    const deadline = document.getElementById('deadline').value;

    const selectedCar = CarList.find((car) => car.CarId == carId);
    const selectedCustomer = UserList.find((user) => user.UserId == customer)

    const totalPrice = selectedCar.DailyPrice * deadline;

    leasedVehiclesId++;
    if (selectedCar.Status == false) {
        swal("Bu Araç Zaten Kiralanmıştır!", "Araç Kiralanamadı!", "error");
    }
    else if (selectedCustomer.Status == false) {
        swal("Bir kullanıcı aynı anda 1`den fazla araç kiralayamaz!", "Araç Kiralanamadı!", "error");
    }
    else if (selectedCustomer.DriverLicenseType == "yok") {
        swal("Ehliyeti Olmayan Kullanıcı Araç Kiralayamaz!", "Araç Kiralanamadı!", "error");
    }
    else {
        CarList.find((car) => car.CarId == carId).Status = false;
        UserList.find((user) => user.UserId == customer).Status = false;
        const leasedVehic = new LeasedVehicles(leasedVehiclesId, selectedCustomer, selectedCar, deadline, totalPrice);

        LeasedVehics.push(leasedVehic);
        document.getElementById('leasedVehics').innerHTML = "";
        LeasedVehics.forEach((leased) => {
            const row = document.createElement('tr');
            const tableDataId = document.createElement('td');
            const tableDataCustomer = document.createElement('td');
            const tableDataCar = document.createElement('td');
            const tableDataDays = document.createElement('td');
            const tableDataDailyPrice = document.createElement('td');
            const tableDataTotalPrice = document.createElement('td');

            tableDataId.innerText = leased.LeasedVehiclesId;
            tableDataCustomer.innerText = leased.User.UserName + ' ' + leased.User.SurName;
            tableDataCar.innerText = leased.Car.Brand + ' ' + leased.Car.BrandType;
            tableDataDays.innerText = leased.TotalDays;
            tableDataDailyPrice.innerText = leased.Car.DailyPrice;
            tableDataTotalPrice.innerText = leased.Price;



            row.appendChild(tableDataId);
            row.appendChild(tableDataCustomer);
            row.appendChild(tableDataCar);
            row.appendChild(tableDataDays);
            row.appendChild(tableDataDailyPrice);
            row.appendChild(tableDataTotalPrice);

            document.getElementById('leasedVehics').appendChild(row);
            document.getElementById('users').value = "";
            document.getElementById('cars').value = "";
            document.getElementById('deadline').value = "1";
        })
        printCars();
        swal("Araç Kiralandı!", "Araç Başarıyla Kiralandı!", "success");
    }
}
function userDropdownRefresh() {
    const selectUser = document.getElementById("users");

    selectUser.innerHTML = `<option disabled value selected> --Cinsiyet Seçiniz--</option>`;


    selectUser.innerHTML = `<option disabled value selected> -- Select User --</option>`;

    UserList.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.UserId;
        option.innerText = user.UserName + ' ' + user.SurName;

        selectUser.add(option);
    });
}
function carDropdownRefresh() {
    const selectCar = document.getElementById("cars");

    selectCar.innerHTML = `<option disabled value selected> -- Select Car --</option>`;

    CarList.forEach((car) => {
        const option = document.createElement("option");
        option.value = car.CarId;
        option.innerText = car.Brand + ' ' + car.BrandType;

        selectCar.add(option);
    });
}

document.getElementById("addCar").addEventListener("click", (e) => {
    e.preventDefault(); //sayfanın yenilenmesini engelliyor
    addCar();
});
document.getElementById("addCustomer").addEventListener("click", (e) => {
    e.preventDefault(); //sayfanın yenilenmesini engelliyor
    addCustomer();
});
document.getElementById("addRentACar").addEventListener("click", (e) => {
    e.preventDefault(); //sayfanın yenilenmesini engelliyor
    addRentACar();
});
carDropdownRefresh();
userDropdownRefresh();
printCars();
printUsers();