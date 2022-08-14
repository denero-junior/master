<h1 class="main_text">Task 2</h1>
<?php

class NewParent {
}
interface Single {
    public function getSomething();
}

class SortC extends NewParent implements Single
{
    private static $instance;
    private function __construct()
    {
    }

    public static function getInstance()
    {
        if (self::$instance === null)
        {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __clone()
    {
    }

    public function getSomething()
    {
    }

    public static function getSort(int $minPrice,int $maxPrice , array $items): array
    {
        for ($itemsKey = 0; $itemsKey <= count($items);$itemsKey++)
        {
            foreach ($items as $itemsKey => $item)
            {
                foreach ($item as $key => $value)
                {
                    if ($item['price'] > $minPrice && $item['price'] < $maxPrice)
                    {
                        $result[$itemsKey] = $item;
                    }
                }
            }
        }
        usort($result, function($a, $b){
            return ($a['price'] - $b['price']);
        });

        return $result;
    }

}
$items = [
    1=>[
        'title' => 'title1',
        'price' => 80,
        'size' => 'size1'
    ],
    2=>[
        'title' => 'title2',
        'price' => 60,
        'size' => 'size2'
    ],
    3=>[
        'title' => 'title3',
        'price' => 40,
        'size' => 'size3'
    ],
    4=>[
        'title' => 'title4',
        'price' => 50,
        'size' => 'size4'
    ],
    5=>[
        'title' => 'title5',
        'price' => 30,
        'size' => 'size5'
    ],
    6=>[
        'title' => 'title6',
        'price' => 20,
        'size' => 'size6'
    ],
    7=>[
        'title' => 'title7',
        'price' => 70,
        'size' => 'size6'
    ],
    8=>[
        'title' => 'title8',
        'price' => 10,
        'size' => 'size6'
    ],

];

?>
<p> Изначальный массив:</p> <br>
<?php var_dump($items); ?>
<p style="margin-top: 40px;"> Отсортированный массив: </p> <br>
<?php var_dump(SortC::getSort(30,80,$items));?>

