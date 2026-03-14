# Instrucciones para usar el proyecto en local

Este proyecto es una **landing page** con Next.js, React y Tailwind CSS.

## Requisito: Node.js

Necesitas **Node.js** instalado. Si no lo tienes:

1. Entra en **https://nodejs.org**
2. Descarga la versión **LTS**
3. Instala con las opciones por defecto
4. **Cierra y vuelve a abrir** la terminal (o Cursor) después de instalar

---

## Gestor de paquetes recomendado: **pnpm**

El proyecto incluye `pnpm-lock.yaml`, así que está pensado para **pnpm**. Es la opción recomendada (instalaciones más rápidas y coherentes con el proyecto).

### 1. Instalar pnpm (solo la primera vez)

En cualquier terminal:

```bash
npm install -g pnpm
```

### 2. Instalar dependencias del proyecto

En la carpeta del proyecto:

```bash
cd "c:\Users\janet\OneDrive\Escritorio\landing page descomprimida\JYOSYNI"
pnpm install
```

### 3. Arrancar el proyecto en local

```bash
pnpm dev
```

Luego abre en el navegador: **http://localhost:3000**

---

## Alternativa: usar npm

Si prefieres no instalar pnpm, puedes usar **npm**:

```bash
cd "c:\Users\janet\OneDrive\Escritorio\landing page descomprimida\JYOSYNI"
npm install
npm run dev
```

---

## Comandos útiles

| Acción              | Con pnpm     | Con npm        |
|---------------------|-------------|----------------|
| Instalar dependencias | `pnpm install` | `npm install`   |
| Modo desarrollo     | `pnpm dev`  | `npm run dev`   |
| Compilar para producción | `pnpm build` | `npm run build` |
| Ejecutar compilado  | `pnpm start` | `npm start`     |

---

## Si no arranca `npm run dev`

Si ves **"Port 3000 is in use"** o **"Unable to acquire lock"**, suele ser porque ya hay otro servidor de Next.js en marcha. Solución:

1. Cierra cualquier otra terminal donde tengas `npm run dev` abierto.
2. O en PowerShell: `Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force`
3. Vuelve a ejecutar `npm run dev`.
