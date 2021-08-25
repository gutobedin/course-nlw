<?php
$valor = 150;

if ($valor > 50.00 && $valor <= 100.00) {
$desconto = $valor * 0.025;
echo "O valor da compra foi de " . $valor. " com desconto de ".$desconto.  " reais.";

}

elseif($valor > 100.00) {
$desconto = $valor * 0.10;
echo "O valor da compra foi de " .$valor. " com desconto de ".$desconto. " reais.";


}



?> 