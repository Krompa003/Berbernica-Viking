function prikaziPadajuciMeni() {
    document.getElementById('padajuciMeni').style.display = 'block';
}

function sakrijPadajuciMeni() {
    document.getElementById('padajuciMeni').style.display = 'none';
}

function prikaziPravilnik() {
    document.getElementById("modalPravilnik").style.display = "block";
}

function zatvoriPravilnik() {
    document.getElementById("modalPravilnik").style.display = "none";
}

const slika = document.getElementById("slika");

function zumiraj(slika) {
    slika.style.transform = "scale(1.1)";
    slika.style.transition = "transform 0.2s";
    slika.style.filter = "brightness(40%)";
}

function odzumiraj(slika) {
    slika.style.transform = "scale(1)";
    slika.style.filter = "brightness(100%)";
}

const polje = document.getElementById("polje");

function prosiriPolje(polje) {
    polje.style.transform = "scaleX(1.1)";
    polje.style.transition = "transform 0.4s";
    polje.style.backgroundColor = "white";
}

function vratiPolje(polje) {
    polje.style.transform = "scale(1)";
    polje.style.backgroundColor = "blanchedalmond";
}

const slike = [
    "../slike/galerija/slika1.jpg",
    "../slike/galerija/slika2.jpg",
    "../slike/galerija/slika3.jpg",
    "../slike/galerija/slika4.jpg",
    "../slike/galerija/slika5.jpg",
    "../slike/galerija/slika6.jpg"
];

function prikaziModalSlike(index) {
    trenutnaSlika = index;
    const modalSlika = document.getElementById("modalSlika");
    modalSlika.src = slike[index];
    const modal = document.getElementById("modalSlike");
    modal.style.display = "block";
}

function pronadjiIndeksSlike(slikaSrc) {
    return slike.indexOf(slikaSrc);
}

function zatvoriModalSlike() {
    const modal = document.getElementById("modalSlike");
    modal.style.display = "none";
}

function prethodnaSlika() {
    trenutnaSlika = (trenutnaSlika - 1 + slike.length) % slike.length;
    const modalSlika = document.getElementById("modalSlika");
    modalSlika.src = slike[trenutnaSlika];
}

function sledecaSlika() {
    trenutnaSlika = (trenutnaSlika + 1) % slike.length;
    const modalSlika = document.getElementById("modalSlika");
    modalSlika.src = slike[trenutnaSlika];
}

function potvrdiFormu(event) {
    event.preventDefault();
    let f = zakazivanje;
    let ime = f.ime.value;
    let prezime = f.prezime.value;
    let brojTelefona = f.brojTelefona.value;
    let email = f.email.value.toLowerCase();
    let datum = f.datum.value;
    let saglasnost = f.saglasnost.checked;
    let poruka = "";

    let uslugeChecked = false;
    let usluge = f.querySelectorAll('.usluga');
    for (let i = 0; i < usluge.length; i++) {
        if (usluge[i].checked) {
            uslugeChecked = true;
        }
    }

    if (ime !== "" && prezime !== "" && brojTelefona !== "" && email !== "" && datum !== "" && uslugeChecked) {
        if (ime.length < 3) {
            poruka = "Ime mora sadržati minimum 3 karaktera";
        }
        if (prezime.length < 3) {
            poruka = "Prezime mora sadržati minimum 3 karaktera";
        }
        if (brojTelefona.length < 9) {
            poruka = "Broj telefona mora sadržati najmanje 9 cifara";
        }
        if (email.includes("@") === false) {
            poruka = "Email mora sadržati znak @";
        }
        if (new Date(datum) < new Date()) {
            poruka = "Datum mora biti u budućnosti";
        }
        if (saglasnost === false) {
            poruka = "Morate prihvatiti pravila naše berbernice, kako bi zakazali termin!";
        }

        if (poruka) {
            alert(poruka);
        }
        else {
            let informacije =
                "Ime: " + ime + "\n" +
                "Prezime: " + prezime + "\n" +
                "Broj telefona: " + brojTelefona + "\n" +
                "Email adresa: " + email + "\n" +
                "Datum zakazanog termina: " + datum;

            if (confirm("Da li ste sigurni da želite zakazati termin sa sledećim podacima?\n\n" + informacije)) {
                var cena = 0;
                var usluga = ime + ", uspešno ste zakazali vaš termin sa sledećim uslugama: \n\n"
                if (document.zakazivanje.standardnoSisanje.checked == true) {
                    cena += 800;
                    usluga += "Standardno Šišanje \n"
                }
                if (document.zakazivanje.sisanjeBezMakaza.checked == true) {
                    cena += 700;
                    usluga += "Šišanje bez makaza \n"
                }
                if (document.zakazivanje.fade.checked == true) {
                    cena += 1000;
                    usluga += "Šišanje (Fade) \n"
                }
                if (document.zakazivanje.sisanjeZaDecu.checked == true) {
                    cena += 500;
                    usluga += "Šišanje za decu \n"
                }
                if (document.zakazivanje.brijanjeBrade.checked == true) {
                    cena += 800;
                    usluga += "Brijanje brade \n"
                }
                if (document.zakazivanje.brijanjeGlave.checked == true) {
                    cena += 700;
                    usluga += "Brijanje glave \n"
                }
                if (document.zakazivanje.stucovanjeBrade.checked == true) {
                    cena += 400;
                    usluga += "Štucovanje brade \n"
                }
                if (document.zakazivanje.linijaBrijanje.checked == true) {
                    cena += 200;
                    usluga += "Linija (Brijanje) \n"
                }
                if (document.zakazivanje.linijaMasinica.checked == true) {
                    cena += 100;
                    usluga += "Linija (Mašinica) \n"
                }
                if (document.zakazivanje.pranjeKose.checked == true) {
                    cena += 250;
                    usluga += "Pranje kose \n"
                }
                if (document.zakazivanje.namestanjeFrizure.checked == true) {
                    cena += 100;
                    usluga += "Nameštanje frizure \n"
                }
                if (document.zakazivanje.namestanjeBrade.checked == true) {
                    cena += 100;
                    usluga += "Nameštanje brade \n"
                }
                alert(usluga + "\nVaš ukupni iznos je " + cena + " dinara\n\n Hvala na poverenju, vidimo se " + datum);
                window.location.href = "../index.html";
            }
            return;
        }

    } else {
        alert("Sva polja moraju biti popunjena!");
    }
}