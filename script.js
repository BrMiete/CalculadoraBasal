let peso;
function HollidaySegar(peso){
    if(peso>20){
        VolumenDiario = 1500 + (peso-20)*20; 
    }
    else if(peso>10){
        VolumenDiario = 1000 + (peso-10)*50;
    }
    else{
        VolumenDiario = peso*100;
    }
    return VolumenDiario;
}
function SuperficieCorporal(peso){
    let SC = ((peso*4)+7)/(peso+90);
    return SC;
}
function  Mantenimiento(volumen){
    let Mant = Math.round(volumen/24);
    return Mant;
}
function MantenimientoMedio(valor){
    let MantMedio = Math.round(valor*1.5);
    return MantMedio;
}

const CALCULAR = document.getElementById('calcular');
const ERROR1 = document.getElementById('error1');
const ERROR2 = document.getElementById('error2');
const RESULTADO = document.getElementById('contenedor-resultado');
const VDIARIO = document.getElementById('VDiario');
const MANT = document.getElementById('Mant');
const MANTMEDIO = document.getElementById('MantM');
const SC1500 = document.getElementById('SC1500');
const RTAVD1 = document.getElementById('RtaVD1');
const RTAM1 = document.getElementById('RtaM1');
const RTAMM1 = document.getElementById('RtaMM1');
const SC2000 = document.getElementById('SC2000');
const RTAVD2 = document.getElementById('RtaVD2');
const RTAM2 = document.getElementById('RtaM2');
const RTAMM2 = document.getElementById('RtaMM2');
const HSTITLE = document.getElementById('HS-title');
const SCTITLE = document.getElementById('SC-title');
const HSLIST = document.getElementById('HS-list');
const SCLIST = document.getElementById('SC-list');
const NOTATITLE = document.getElementById('Nota-title');
const NOTALIST = document.getElementById('Nota-list');

CALCULAR.addEventListener('click', ()=> {
    const DATO = document.getElementById('peso').valueAsNumber;
    if (DATO > 0){
        ERROR1.style.display = 'none';
        ERROR2.style.display = 'none';
        if(DATO <= 30){
            let VD = HollidaySegar(DATO);
            let M = Mantenimiento(VD);
            let MM = MantenimientoMedio(M);
            RTAVD1.innerHTML = VD + ' [cc]';
            RTAM1.innerHTML = M + ' [cc/hr]';
            RTAMM1.innerHTML = MM + ' [cc/hr]';
            VDIARIO.style.display = 'block';
            MANT.style.display = 'block';
            MANTMEDIO.style.display = 'block';
            RTAVD1.style.display = 'block';
            RTAM1.style.display = 'block';
            RTAMM1.style.display = 'block';
            SC1500.style.display = 'none';
            SC2000.style.display = 'none';
            RTAVD2.style.display = 'none';
            RTAM2.style.display = 'none';
            RTAMM2.style.display = 'none';
            HSTITLE.style.display = 'block';
            HSLIST.style.display = 'block';
            SCTITLE.style.display = 'none';
            SCLIST.style.display = 'none';
            NOTATITLE.style.display = 'block';
            NOTALIST.style.display = 'block';
        }
        else {
            let VD1 = Math.round(SuperficieCorporal(DATO)*1500);
            let VD2 = Math.round(SuperficieCorporal(DATO)*2000);
            let M1 = Mantenimiento(VD1);
            let M2 = Mantenimiento(VD2);
            let MM1 = MantenimientoMedio(M2);
            let MM2 = MantenimientoMedio(M1);
            RTAVD1.innerHTML = VD1 + ' [cc]';
            RTAM1.innerHTML = M1 + ' [cc/hr]';
            RTAMM1.innerHTML = MM1 + ' [cc/hr]';
            RTAVD2.innerHTML = VD2 + ' [cc]';
            RTAM2.innerHTML = M2 + ' [cc/hr]';
            RTAMM2.innerHTML = MM2 + ' [cc/hr]';
            VDIARIO.style.display = 'block';
            MANT.style.display = 'block';
            MANTMEDIO.style.display = 'block';
            SC1500.style.display = 'block';
            SC2000.style.display = 'block';
            RTAVD1.style.display = 'block';
            RTAM1.style.display = 'block';
            RTAMM1.style.display = 'block';
            RTAVD2.style.display = 'block';
            RTAM2.style.display = 'block';
            RTAMM2.style.display = 'block';
            SCTITLE.style.display = 'block';
            SCLIST.style.display = 'block';
            HSTITLE.style.display = 'none';
            HSLIST.style.display = 'none';
            NOTATITLE.style.display = 'block';
            NOTALIST.style.display = 'block';
        }
    }
    else if(DATO <= 0){
        ERROR1.style.display = 'none';
        ERROR2.style.display = 'block';
        VDIARIO.style.display = 'none';
        MANT.style.display = 'none';
        MANTMEDIO.style.display = 'none';
        SC1500.style.display = 'none';
        SC2000.style.display = 'none';
        RTAVD1.style.display = 'none';
        RTAM1.style.display = 'none';
        RTAMM1.style.display = 'none';
        RTAVD2.style.display = 'none';
        RTAM2.style.display = 'none';
        RTAMM2.style.display = 'none';
        HSTITLE.style.display = 'block';
        HSLIST.style.display = 'block';
        SCTITLE.style.display = 'block';
        SCLIST.style.display = 'block';
        NOTATITLE.style.display = 'block';
        NOTALIST.style.display = 'block';
    }
    else {
        ERROR1.style.display = 'block';
        ERROR2.style.display = 'none';
        VDIARIO.style.display = 'none';
        MANT.style.display = 'none';
        MANTMEDIO.style.display = 'none';
        SC1500.style.display = 'none';
        SC2000.style.display = 'none';
        RTAVD1.style.display = 'none';
        RTAM1.style.display = 'none';
        RTAMM1.style.display = 'none';
        RTAVD2.style.display = 'none';
        RTAM2.style.display = 'none';
        RTAMM2.style.display = 'none';
        HSTITLE.style.display = 'block';
        HSLIST.style.display = 'block';
        SCTITLE.style.display = 'block';
        SCLIST.style.display = 'block';
        NOTATITLE.style.display = 'block';
        NOTALIST.style.display = 'block';
    }
})