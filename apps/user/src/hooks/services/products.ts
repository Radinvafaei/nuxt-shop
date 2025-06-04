import { useQuery } from '@tanstack/vue-query';
import { ProductsService } from 'services';

const SERVICES = new ProductsService();

export const useGetProducts = () =>
  useQuery({
    queryFn: async () => await SERVICES.getAll(),
    queryKey: [`get_all_products`],
  });

export const useGetProductByID = (id: number) =>
  useQuery({
    queryFn: async () => await SERVICES.getById(id),
    queryKey: [`get_product_by_id`, id],
  });
