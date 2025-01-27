import { StoreItem } from '../common/components/StoreItem.tsx';
import { Basket } from '../common/components/Basket.tsx';
import { useSetAtom } from 'jotai';
import { addBasketItemAtom, basketItemsAtom, basketReduceItemAtom } from '../atoms/basket.ts';
import { useCallback } from 'react';
import { Product } from '../game/types.ts';
import { useAtomValue } from 'jotai/index';

const items = [
  {
    id: '1',
    name: 'Heart Basic',
    price: 12,
    description: 'Add 100 more health points',
    image: '/images/heart.png',
  },
  {
    id: '2',
    name: 'Heart Advanced',
    price: 45,
    description: 'Add 100 more health points',
    image: '/images/heart.png',
  },
  {
    id: '3',
    name: 'Heart Elite',
    price: 69,
    description: 'Add 100 more health points',
    image: '/images/heart.png',
  },
  {
    id: '4',
    name: 'Heart Master',
    price: 99,
    description: 'Add 100 more health points',
    image: '/images/heart.png',
  },
];

export function Store() {
  const addToBasket = useSetAtom(addBasketItemAtom);
  const minusBasket = useSetAtom(basketReduceItemAtom);
  const basketItems = useAtomValue(basketItemsAtom);

  const handleAddToBasket = useCallback(
    (product: Product) => {
      addToBasket(product);
    },
    [addToBasket],
  );

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Store</h1>
        <Basket />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <StoreItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            onAdd={handleAddToBasket}
            onRemove={minusBasket}
            addedCount={basketItems.find((i) => i.id === item.id)?.quantity || 0}
          />
        ))}
      </div>
    </>
  );
}
