function prikaziPadajuciMeni(){document.getElementById("padajuciMeni").style.display="block"}function sakrijPadajuciMeni(){document.getElementById("padajuciMeni").style.display="none"}function prikaziPravilnik(){document.getElementById("modalPravilnik").style.display="block"}function zatvoriPravilnik(){document.getElementById("modalPravilnik").style.display="none"}const slika=document.getElementById("slika");function zumiraj(e){e.style.transform="scale(1.1)",e.style.transition="transform 0.2s",e.style.filter="brightness(40%)"}function odzumiraj(e){e.style.transform="scale(1)",e.style.filter="brightness(100%)"}const polje=document.getElementById("polje");function prosiriPolje(e){e.style.transform="scaleX(1.1)",e.style.transition="transform 0.4s",e.style.backgroundColor="white"}function vratiPolje(e){e.style.transform="scale(1)",e.style.backgroundColor="blanchedalmond"}const slike=["../slike/galerija/slika1.jpg","../slike/galerija/slika2.jpg","../slike/galerija/slika3.jpg","../slike/galerija/slika4.jpg","../slike/galerija/slika5.jpg","../slike/galerija/slika6.jpg"];function prikaziModalSlike(e){trenutnaSlika=e;let a=document.getElementById("modalSlika");a.src=slike[e];let i=document.getElementById("modalSlike");i.style.display="block"}function pronadjiIndeksSlike(e){return slike.indexOf(e)}function zatvoriModalSlike(){let e=document.getElementById("modalSlike");e.style.display="none"}function prethodnaSlika(){trenutnaSlika=(trenutnaSlika-1+slike.length)%slike.length;let e=document.getElementById("modalSlika");e.src=slike[trenutnaSlika]}function sledecaSlika(){trenutnaSlika=(trenutnaSlika+1)%slike.length;let e=document.getElementById("modalSlika");e.src=slike[trenutnaSlika]}function potvrdiFormu(e){e.preventDefault();let a=zakazivanje,i=a.ime.value,n=a.prezime.value,l=a.brojTelefona.value,t=a.email.value.toLowerCase(),r=a.datum.value,s=a.saglasnost.checked,o="",k=!1,d=a.querySelectorAll(".usluga");for(let j=0;j<d.length;j++)d[j].checked&&(k=!0);if(""!==i&&""!==n&&""!==l&&""!==t&&""!==r&&k){if(i.length<3&&(o="Ime mora sadržati minimum 3 karaktera"),n.length<3&&(o="Prezime mora sadržati minimum 3 karaktera"),l.length<9&&(o="Broj telefona mora sadržati najmanje 9 cifara"),!1===t.includes("@")&&(o="Email mora sadržati znak @"),new Date(r)<new Date&&(o="Datum mora biti u budućnosti"),!1===s&&(o="Morate prihvatiti pravila naše berbernice, kako bi zakazali termin!"),o)alert(o);else{if(confirm("Da li ste sigurni da želite zakazati termin sa sledećim podacima?\n\n"+("Ime: "+i+"\nPrezime: "+n+"\nBroj telefona: "+l+"\nEmail adresa: "+t)+"\nDatum zakazanog termina: "+r)){var c=0,m=i+", uspešno ste zakazali vaš termin sa sledećim uslugama: \n\n";!0==document.zakazivanje.standardnoSisanje.checked&&(c+=800,m+="Standardno Šišanje \n"),!0==document.zakazivanje.sisanjeBezMakaza.checked&&(c+=700,m+="Šišanje bez makaza \n"),!0==document.zakazivanje.fade.checked&&(c+=1e3,m+="Šišanje (Fade) \n"),!0==document.zakazivanje.sisanjeZaDecu.checked&&(c+=500,m+="Šišanje za decu \n"),!0==document.zakazivanje.brijanjeBrade.checked&&(c+=800,m+="Brijanje brade \n"),!0==document.zakazivanje.brijanjeGlave.checked&&(c+=700,m+="Brijanje glave \n"),!0==document.zakazivanje.stucovanjeBrade.checked&&(c+=400,m+="Štucovanje brade \n"),!0==document.zakazivanje.linijaBrijanje.checked&&(c+=200,m+="Linija (Brijanje) \n"),!0==document.zakazivanje.linijaMasinica.checked&&(c+=100,m+="Linija (Mašinica) \n"),!0==document.zakazivanje.pranjeKose.checked&&(c+=250,m+="Pranje kose \n"),!0==document.zakazivanje.namestanjeFrizure.checked&&(c+=100,m+="Nameštanje frizure \n"),!0==document.zakazivanje.namestanjeBrade.checked&&(c+=100,m+="Nameštanje brade \n"),alert(m+"\nVaš ukupni iznos je "+c+" dinara\n\n Hvala na poverenju, vidimo se "+r),window.location.href="../index.html"}return}}else alert("Sva polja moraju biti popunjena!")}
