let yeniSatir = "\r\n"
let bakiye = 1000;



let metin = "1-Bakiye Görüntüleme" + yeniSatir
    + "2-Para Çekme" + yeniSatir
    + "3-Para Yatırma" + yeniSatir
    + "4-Çıkış" + yeniSatir
    + "Lütfen Bir Değer Seçiniz.";


let secim = prompt(metin);

switch (secim) {
    case "1":
        alert("Bakiyeniz" + bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek İstediğiniz Tutarı Giriniz  :"));
        if (cekilecekTutar < bakiye) {
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiye" + bakiye);
        } else {
            alert("Bakiyenizden Fazla Para Çekemezsiniz!" + yeniSatir
                + "Bakiyeniz  :" + bakiye + " " + "Çekilecek Tutar  :" + cekilecekTutar);
        }
        break;
    case "3":
        let yatırılacakTutar = Number(prompt("Lütfen Yatırmak İstediğiniz Tutarı Giriniz !"));
        bakiye = bakiye + yatırılacakTutar;
        alert("Güncel Bakiyeniz  :" + bakiye);
        break;
    case "4":
        alert("Sistemden Çıkış Yapıldı");
        break;
    default:
        alert("Lütfen 1 - 4 arasında değer giriniz !");
        break;
}