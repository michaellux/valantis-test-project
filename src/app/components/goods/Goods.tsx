'use client'
import { Goods, GoodsId } from './Goods.types';
import React, { useEffect, useRef } from 'react';
import {Card, CardBody} from "@nextui-org/react";
import { useAppSelector, useAppStore, useAppDispatch } from '../../../lib/hooks';
import { fetchGoods } from '../../../lib/features/goodsSlice';
import { RootState } from '../../../lib/store';
interface GoodsProps {
  
}

export default function Goods(props: GoodsProps) {
  const dispatch = useAppDispatch();
  const goods = useAppSelector((state: RootState) => state.goods);
  const loading = useAppSelector((state: RootState) => state.loading);
  const error:  string | null  = useAppSelector((state: RootState) => state.error) as string | null;

  useEffect(() => {
    dispatch(fetchGoods({nameOfMethod: "get_ids", optionalParams: null}) as any);
  }, [dispatch]);

  const cardRef = useRef<HTMLDivElement>(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
          {goods.map((good: Goods) => (
      <div key={good.id}>
        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
      </div>
    ))}
    </div>
  );
}
