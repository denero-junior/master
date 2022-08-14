<h1 class="main_text">Task 3</h1>
<?php
function binarySearch ( array $arr ,int $begin,int $end, int $search )
{
    $begin = 0;
    $end = count($arr) - 1;
    $counter = 0;
    while ($begin <= $end) {
        $middle = floor(($begin+$end)/2);
        $counter++;
        if ($arr[$middle] < $search)
        {
            $begin = $middle + 1;

        }
        else if ($arr[$middle] > $search)
        {
            $end = $middle - 1;
        }
        else
        {
            echo 'Количество итераций =>'. $counter . "<br>";
            return 'Искомое число =>'. $search;
        }

    }

    return 'Искомое число вне диапазона списка. Количество итераций =>' . $counter;

}
$a = range(1,100);
echo binarySearch($a,0,count($a),27);
echo '<h2> Список: </h2>';
print_r($a);

?>
