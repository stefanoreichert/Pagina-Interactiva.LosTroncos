from PIL import Image, ImageDraw, ImageFont, ImageOps
from pathlib import Path
import textwrap

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'docs/wireframes'
REF = ROOT / 'docs/referencias'
OUT.mkdir(parents=True, exist_ok=True)
BG, INK, GREEN, SOFT, MUTED = '#F6F3EB', '#172C24', '#203D31', '#E4E8DF', '#59665C'
FONTS = Path('C:/Windows/Fonts')

def font(n, serif=False, bold=False):
    return ImageFont.truetype(str(FONTS / ('georgia.ttf' if serif else ('segoeuib.ttf' if bold else 'segoeui.ttf'))), n)

def txt(im, x, y, s, size=20, color=INK, serif=False, bold=False, width=None, leading=1.4):
    d=ImageDraw.Draw(im); f=font(size,serif,bold)
    lines=[]
    for paragraph in s.split('\n'):
        if width is None:
            lines.append(paragraph); continue
        line=''
        for word in paragraph.split():
            candidate=(line+' '+word).strip()
            if line and d.textlength(candidate,font=f)>width:
                lines.append(line); line=word
            else: line=candidate
        lines.append(line)
    for i,line in enumerate(lines): d.text((x,y+i*round(size*leading)),line,font=f,fill=color)
    return y+len(lines)*round(size*leading)

def rect(im, box, fill, outline=None, radius=0):
    ImageDraw.Draw(im).rounded_rectangle(box,radius,fill=fill,outline=outline,width=1)

def rule(im,x,y,w,color='#BAC3B9'):
    ImageDraw.Draw(im).line((x,y,x+w,y),fill=color,width=1)

def photo(im,name,box):
    source=Image.open(REF/name).convert('RGB')
    fitted=ImageOps.fit(source,(box[2]-box[0],box[3]-box[1]),centering=(.5,.5))
    im.paste(fitted,(box[0],box[1]))

def logo(im,x,y,w):
    source=Image.open(REF/'logo.jpg').convert('RGB')
    # Recorte de espacio exterior, sin redibujar ni recolorear la marca.
    mask=source.convert('L').point(lambda v:255 if v<170 else 0)
    b=mask.getbbox(); source=source.crop((max(0,b[0]-8),max(0,b[1]-8),min(source.width,b[2]+8),min(source.height,b[3]+8)))
    h=round(source.height*w/source.width)
    source=source.resize((w,h),Image.Resampling.LANCZOS);im.paste(source,(x,y)); return h

def button(im,x,y,label,w=190,h=52,invert=False,size=18):
    rect(im,(x,y,x+w,y+h),BG if invert else GREEN,radius=4)
    f=font(size,bold=True);d=ImageDraw.Draw(im)
    d.text((x+(w-d.textlength(label,font=f))/2,y+(h-size)/2-3),label,font=f,fill=GREEN if invert else BG)

PIZZAS=[
('Timbó','14.000','Mozzarella, salsa de tomate, aceitunas y orégano.'),
('Palo Rosa','16.000','Mozzarella, salsa de tomate, jamón, cherrys, albahaca y aceitunas.'),
('Palmito','16.000','Mozzarella, salsa de tomate, palmitos y huevo duro.'),
('Caña Fístola','19.000','Mozzarella, salsa de tomate, roquefort y nueces.'),
('Anchico','18.000','Mozzarella, cebolla caramelizada, rúcula y jamón crudo.'),
('4 Quesos','18.000','Mozzarella, roquefort, provolone, sardo y salsa de tomate.'),
('Petiribí','16.000','Mozzarella, salsa de tomate, calabresa y morrones asados.'),
('Mora Blanca','15.000','Mozzarella, cebolla y aceite de oliva.'),
('Incienso','14.000','Mozzarella, salsa de tomate, huevo duro, choclo y aceitunas.'),
('Ananá','18.000','Mozzarella, salsa de tomate, jamón crudo, ananá y cerezas.'),
('Pindó','16.000','Mozzarella, salsa de tomate, bondiola, tomate, aceitunas y aceite de ajo.'),
('Kurupí','20.000','Mozzarella, salsa de tomate, ternera picada y cebolla caramelizada.'),
('Urunday','18.000','Mozzarella, salsa de tomate, roquefort y peras.'),
('Araticú','22.000','Mozzarella, provolone, jamón, morrones asados, cebolla, oliva y orégano.'),
('Champiñones','19.000','Mozzarella, salsa de tomate, champiñones y ajo.'),
('Carandaí','15.000','Mozzarella, salsa de tomate, jamón, morrones asados y aceitunas.'),
('Los Troncos','19.000','Mozzarella, salsa de tomate, cheddar y panceta.'),
('Hambur Pizza','27.000','Mozzarella, salsa de tomate, medallón de carne, tomate y huevo frito.')]

def dish(im,x,y,w,data,mobile=False):
    name,price,desc=data; ns=21 if mobile else 24; ps=18 if mobile else 21
    d=ImageDraw.Draw(im);p='$'+price; pw=d.textlength(p,font=font(ps,bold=True))
    end=txt(im,x,y,name,ns,bold=True,width=w-pw-20)
    txt(im,x+w-pw,y,p,ps,bold=True)
    end=txt(im,x,end+7,desc,16 if mobile else 18,color=MUTED,width=w)
    rule(im,x,end+15,w)
    return end+35

def label(im,w,title,sub):
    rect(im,(0,0,w,80),'#FFFFFF')
    txt(im,24,13,title,20,bold=True)
    txt(im,24,45,sub,14,color=MUTED)

def desktop():
    im=Image.new('RGB',(1440,4850),BG)
    label(im,1440,'Los Troncos · Wireframe de escritorio · 1440 px','Estructura provisional · Estado de carta: Cocina / Pizzas · Fuentes de esquema, no tipografía final')
    logo(im,32,96,124)
    for x,t in [(860,'Carta'),(980,'El lugar'),(1115,'Ambiente'),(1260,'Visitanos')]:txt(im,x,115,t,19)
    rect(im,(0,176,1440,536),GREEN)
    txt(im,48,200,'Los Troncos',124,BG,serif=True)
    txt(im,56,355,'Resto bar en Puerto Rico, Misiones.',26,BG)
    button(im,56,430,'Ver la carta',200,invert=True)
    txt(im,1050,445,'Jueves a domingo\n19:00–01:30 del día siguiente',17,BG,width=335)
    photo(im,'lugar_42.jpg',(0,536,1440,1016))
    txt(im,32,1030,'F01 · Fachada real · imagen de portada propuesta',14,MUTED)
    txt(im,48,1140,'El lugar',64,serif=True)
    txt(im,48,1250,'Una mesa en\nPuerto Rico',40,serif=True)
    txt(im,48,1380,'Un resto bar con pizzas, hamburguesas,\nmilanesas, pastas y opciones para compartir.',22,width=690)
    photo(im,'lugar_24.jpg',(1000,1120,1392,1512))
    txt(im,1000,1526,'F02 · Letrero y luz del interior',14,MUTED)
    y=1650
    txt(im,48,y,'La carta',64,serif=True)
    txt(im,50,y+95,'Nombres del lugar, sabores para elegir.',23)
    button(im,48,y+155,'Cocina',130)
    txt(im,210,y+169,'Bebidas',20)
    rect(im,(850,y+155,1392,y+211),BG,outline=MUTED,radius=4)
    txt(im,870,y+171,'Buscar un plato o ingrediente',18,MUTED)
    categories=['Toda la cocina','Entradas','Picadas','Empanadas','Sándwiches','Hamburguesas','Pizzas','Milanesas','Carnes','Pescado','Guarniciones','Pastas','Postres']
    for i,c in enumerate(categories):
        cy=y+260+i*51
        txt(im,48,cy,c,19,bold=c=='Pizzas')
        if c=='Pizzas':rule(im,48,cy+34,80,GREEN)
    txt(im,345,y+255,'Pizzas',36,serif=True)
    txt(im,1250,y+269,'18 opciones',16,MUTED)
    for col in range(2):
        cy=y+340
        for data in PIZZAS[col*9:(col+1)*9]:cy=dish(im,345+col*545,cy,490,data)
    menu_end=max(cy,y+1020)
    txt(im,345,menu_end+10,'Importes cotejados con el PDF. Vigencia y moneda por confirmar antes de publicar.',14,MUTED,width=1000)
    y=menu_end+155
    txt(im,48,y,'Compartir la mesa',64,serif=True)
    photo(im,'lugar_33.jpg',(48,y+115,935,y+620))
    photo(im,'lugar_23.jpg',(975,y+115,1392,y+620))
    txt(im,48,y+638,'F03 · Salón y distribución de mesas',14,MUTED)
    txt(im,975,y+638,'F04 · Detalle de mesa',14,MUTED)
    y+=780
    rect(im,(0,y,1440,y+490),GREEN)
    txt(im,48,y+58,'Visitanos',64,BG,serif=True)
    txt(im,48,y+175,'Av. San Martín 2758',30,BG)
    txt(im,48,y+225,'Puerto Rico, Misiones',23,BG)
    button(im,48,y+310,'Cómo llegar',200,invert=True)
    txt(im,900,y+180,'Jueves a domingo',25,BG,bold=True)
    txt(im,900,y+230,'19:00 a 01:30 del día siguiente',21,BG)
    txt(im,900,y+310,'Instagram     Facebook',21,BG)
    txt(im,900,y+365,'WhatsApp: 3743 61-1895',21,BG)
    y+=490
    logo(im,48,y+50,180)
    txt(im,1030,y+65,'Carta     Ubicación     Contacto',18)
    im=im.crop((0,0,1440,y+190)); im.save(OUT/'escritorio.png')
    return im

def mobile():
    im=Image.new('RGB',(390,7500),BG)
    label(im,390,'Los Troncos · Móvil · 390 px','Estado: Cocina / Pizzas · Esquema provisional')
    logo(im,20,92,94);txt(im,283,109,'Secciones',16)
    rect(im,(0,156,390,477),GREEN)
    txt(im,20,185,'Los Troncos',52,BG,serif=True)
    txt(im,20,271,'Resto bar en\nPuerto Rico, Misiones.',20,BG)
    button(im,20,364,'Ver la carta',200,invert=True)
    photo(im,'lugar_42.jpg',(0,477,390,777))
    txt(im,20,789,'F01 · Fachada · recorte móvil a validar',14,MUTED)
    y=875
    txt(im,20,y,'El lugar',38,serif=True)
    y=txt(im,20,y+78,'Pizzas, hamburguesas, milanesas, pastas y opciones para compartir.',18,width=350)+35
    photo(im,'lugar_24.jpg',(20,y,370,y+320));y+=337
    txt(im,20,y,'F02 · Luz y letrero del interior',14,MUTED);y+=110
    txt(im,20,y,'La carta',44,serif=True);y+=85
    button(im,20,y,'Cocina',130);txt(im,180,y+14,'Bebidas',18);y+=80
    txt(im,20,y,'Buscar en la carta',16,bold=True);y+=31
    rect(im,(20,y,370,y+52),BG,outline=MUTED,radius=4)
    txt(im,34,y+14,'Nombre o ingrediente',16,MUTED);y+=80
    txt(im,20,y,'Categoría',16,bold=True);y+=31
    rect(im,(20,y,370,y+52),SOFT,outline=MUTED,radius=4)
    txt(im,34,y+12,'Pizzas',18,bold=True)
    ImageDraw.Draw(im).line([(338,y+22),(343,y+27),(348,y+22)],fill=INK,width=2);y+=90
    txt(im,20,y,'Pizzas',30,serif=True);txt(im,270,y+9,'18 opciones',15,MUTED);y+=70
    for data in PIZZAS:y=dish(im,20,y,350,data,True)
    y=txt(im,20,y+8,'Importes del PDF. Vigencia y moneda por confirmar antes de publicar.',14,MUTED,width=350)+100
    txt(im,20,y,'Compartir la mesa',32,serif=True);y+=80
    photo(im,'lugar_33.jpg',(20,y,370,y+285));y+=299
    txt(im,20,y,'F03 · Salón del local',14,MUTED);y+=65
    photo(im,'lugar_23.jpg',(20,y,370,y+310));y+=325
    txt(im,20,y,'F04 · Detalle de mesa',14,MUTED);y+=110
    rect(im,(0,y,390,y+610),GREEN)
    txt(im,20,y+45,'Visitanos',42,BG,serif=True)
    txt(im,20,y+127,'Av. San Martín 2758',23,BG)
    txt(im,20,y+170,'Puerto Rico, Misiones',18,BG)
    txt(im,20,y+230,'Jueves a domingo',20,BG,bold=True)
    txt(im,20,y+270,'19:00 a 01:30\ndel día siguiente',18,BG)
    button(im,20,y+365,'Cómo llegar',200,invert=True)
    txt(im,20,y+460,'Instagram     Facebook',18,BG)
    txt(im,20,y+510,'WhatsApp: 3743 61-1895',18,BG)
    y+=610
    logo(im,20,y+40,145)
    txt(im,20,y+143,'Carta     Ubicación     Contacto',16)
    im=im.crop((0,0,390,y+215));im.save(OUT/'movil.png');return im

def states():
    im=Image.new('RGB',(1280,1030),'#DCE0DA')
    txt(im,32,20,'Estados móviles · navegación y carta',28,bold=True)
    for x,title in [(30,'Secciones abiertas'),(445,'Bebidas / Tragos'),(860,'Búsqueda sin resultados')]:
        txt(im,x,82,title,18,bold=True)
        rect(im,(x,125,x+390,969),BG)
    x=30
    txt(im,x+20,149,'Los Troncos',23,serif=True);txt(im,x+297,154,'Cerrar',16)
    for i,t in enumerate(['Carta','El lugar','Ambiente','Visitanos']):txt(im,x+20,265+i*85,t,35,serif=True)
    txt(im,x+20,720,'Av. San Martín 2758\nPuerto Rico, Misiones',17,width=350)
    txt(im,x+20,831,'Instagram     Facebook',17)
    x=445
    txt(im,x+20,149,'Los Troncos',23,serif=True);txt(im,x+280,154,'Secciones',16)
    txt(im,x+20,235,'La carta',42,serif=True)
    txt(im,x+20,317,'Cocina',18);button(im,x+150,302,'Bebidas',150)
    txt(im,x+20,391,'Buscar en la carta',16,bold=True)
    rect(im,(x+20,426,x+370,478),BG,outline=MUTED,radius=4);txt(im,x+33,440,'Nombre o ingrediente',16,MUTED)
    txt(im,x+20,515,'Categoría',16,bold=True)
    rect(im,(x+20,550,x+370,602),SOFT,outline=MUTED,radius=4);txt(im,x+34,562,'Tragos',18,bold=True)
    txt(im,x+20,643,'Tragos',30,serif=True)
    yy=710
    for row in [('Aperol','7.500','Aperol y jugo de naranja.'),('Fernet','7.000','Fernet y Coca-Cola.')]:yy=dish(im,x+20,yy,350,row,True)
    x=860
    txt(im,x+20,149,'Los Troncos',23,serif=True);txt(im,x+280,154,'Secciones',16)
    txt(im,x+20,235,'La carta',42,serif=True)
    button(im,x+20,302,'Cocina',130);txt(im,x+180,317,'Bebidas',18)
    txt(im,x+20,391,'Buscar en la carta',16,bold=True)
    rect(im,(x+20,426,x+370,478),BG,outline=GREEN,radius=4);txt(im,x+33,440,'zzz',18)
    txt(im,x+20,515,'Categoría',16,bold=True)
    rect(im,(x+20,550,x+370,602),SOFT,outline=MUTED,radius=4);txt(im,x+34,562,'Toda la cocina',18)
    txt(im,x+20,680,'Sin coincidencias',29,serif=True)
    txt(im,x+20,737,'Probá otro nombre o ingrediente.',17,width=350)
    button(im,x+20,807,'Limpiar búsqueda',225)
    im.save(OUT/'estados-moviles.png')

d=desktop();m=mobile();states()
# Vista de lectura rápida, con etiquetas fuera de los encuadres.
canvas=Image.new('RGB',(1300,1050),'#DCE0DA')
txt(canvas,30,22,'Los Troncos · propuesta de estructura',30,bold=True)
txt(canvas,30,70,'Portada y comienzo de la página. Ver los archivos completos para revisar la carta y el cierre.',18,MUTED)
dc=d.crop((0,80,1440,1660)).resize((850,933),Image.Resampling.LANCZOS)
mc=m.crop((0,80,390,1120)).resize((340,907),Image.Resampling.LANCZOS)
canvas.paste(dc,(30,112));canvas.paste(mc,(920,112));canvas.save(OUT/'vista-general.png')
print('Láminas generadas:',d.size,m.size)
