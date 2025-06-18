<script>
    let visor = $state('');

    function clear() {
        visor = '';
    }

    function calcular() {
    try {
        let expressao = visor
            .replace(/√\s*\(/g, 'Math.sqrt(')                    
            .replace(/log\s*\(/g, 'Math.log10(')                 
            .replace(/(\d+(\.\d+)?)%/g, '($1*0.01)')           
            .replace(/(\d+(\.\d+)?)²/g, '($1**2)')              
            .replace(/(\d+(\.\d+)?)\s*mod\s*(\d+(\.\d+)?)/g, '($1%$3)'); 

        if (!expressao.trim()) {
            visor = '';
            return;
        }

        let resultado = eval(expressao);

            visor = resultado.toString();
    
    } catch {
        visor = 'Erro';
    }
}

    function press(caractere) {
        visor += caractere;
    }

    function apagar() {
        visor = visor.length > 1 ? visor.slice(0, -1) : '';
    }

    function raizQuadrada() {
        visor += '√(';
    }

    function porcentagem() {
        visor += '%';
    }

    function aoQuadrado() {
        const correspondencia = visor.match(/(\d+)(?!.*\d)/);
        if (correspondencia) {
            visor = visor.slice(0, correspondencia.index + correspondencia[0].length) + '²';
        }
    }

    function log() {
        visor += 'log(';
    }

    function inverterSinal() {
        try {
            let resultado = eval(visor);
            visor = (-resultado).toString();
        } catch {
            visor = 'Erro';
        }
    }

    function arredondarNumero() {
        try {
            let resultado = eval(visor);
            visor = Math.round(resultado).toString();
        } catch {
            visor = 'Erro';
        }
    }
    function modulo() {
    visor += ' mod ';
}
</script>

<div class="text-center mt-3">
    <input class="form-control" readonly bind:value={visor} style="font-weight:600;" />
    <table class="table table-sm table-borderless">
        <tbody>
            <tr>
                <td><button class="btn btn-danger w-100" onclick={() => clear()}>C</button></td>
                <td><button class="btn btn-info w-100" onclick={() => press('(')}>(</button></td>
                <td><button class="btn btn-info w-100" onclick={() => press(')')}>)</button></td>
                <td><button class="btn btn-info w-100" onclick={() => press('/')}>÷</button></td>
            </tr>
            
            <tr>
                <td><button class="btn btn-info w-100" onclick={() => raizQuadrada()}>√</button></td>
                <td><button class="btn btn-info w-100" onclick={() => aoQuadrado()}>x²</button></td>
                <td><button class="btn btn-info w-100" onclick={() => log()}>log</button></td>
                <td><button class="btn btn-info w-100" onclick={() => porcentagem()}>%</button></td>
            </tr>
            
            <tr>
                <td><button class="btn btn-info w-100" onclick={() => inverterSinal()}>±</button></td>
                <td><button class="btn btn-info w-100" onclick={() => arredondarNumero()}>⭮</button></td>
                <td><button class="btn btn-info w-100" onclick={() => modulo()}>mod</button></td>
                <td><button class="btn btn-info w-100" onclick={() => press('*')}>×</button></td>
            </tr>
            
            <tr>
                <td><button class="btn btn-secondary w-100" onclick={() => press(7)}>7</button></td>
                <td><button class="btn btn-secondary w-100" onclick={() => press(8)}>8</button></td>
                <td><button class="btn btn-secondary w-100" onclick={() => press(9)}>9</button></td>
                <td><button class="btn btn-info w-100" onclick={() => press('-')}>-</button></td>
            </tr>
            
            <tr>
                <td><button class="btn btn-secondary w-100" onclick={() => press(4)}>4</button></td>
                <td><button class="btn btn-secondary w-100" onclick={() => press(5)}>5</button></td>
                <td><button class="btn btn-secondary w-100" onclick={() => press(6)}>6</button></td>
                <td style="height:0" rowspan=2><button class="btn btn-info w-100 h-100" onclick={() => press('+')}>+</button></td>
            </tr>
            
            <tr>
                <td><button class="btn btn-secondary w-100" onclick={() => press(1)}>1</button></td>
                <td><button class="btn btn-secondary w-100" onclick={() => press(2)}>2</button></td>
                <td><button class="btn btn-secondary w-100" onclick={() => press(3)}>3</button></td>
            </tr>
            
            <tr>
                <td><button class="btn btn-secondary w-100" onclick={() => press(0)}>0</button></td>
                <td><button class="btn btn-secondary w-100" onclick={() => press('.')}>.</button></td>
                <td><button class="btn btn-dark w-100" onclick={() => apagar()}>⌫</button></td>
                <td><button class="btn btn-info w-100" onclick={() => calcular()}>=</button></td>
            </tr>            
        </tbody>
    </table>
</div>