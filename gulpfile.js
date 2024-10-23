import { src, dest, watch } from 'gulp';
import dartSass from 'gulp-dart-sass'; // Asegúrate de que este paquete esté instalado

// Función para compilar Sass a CSS
export function css(done) {
    src('src/scss/app.scss')
        .pipe(dartSass({ outputStyle: 'expanded' }).on('error', dartSass.logError)) // Compila Sass y maneja errores
        .pipe(dest('build/css')); // Destino del CSS generado

    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css); 
}

//"sass": "^1.80.3"