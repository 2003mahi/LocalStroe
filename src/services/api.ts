import { Product, ApiResponse } from '../types';
import { mockProducts } from '../data/products';

class ApiService {
  private delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  async getProducts(category?: string, search?: string): Promise<ApiResponse<Product[]>> {
    await this.delay(500); // Simulate network delay

    let filteredProducts = [...mockProducts];

    if (category && category !== 'All') {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower)
      );
    }

    return {
      data: filteredProducts,
      success: true
    };
  }

  async getProduct(id: string): Promise<ApiResponse<Product | null>> {
    await this.delay(300);

    const product = mockProducts.find(p => p.id === id);

    return {
      data: product || null,
      success: true,
      message: product ? undefined : 'Product not found'
    };
  }

  async updateStock(productId: string, quantity: number): Promise<ApiResponse<boolean>> {
    await this.delay(200);

    const product = mockProducts.find(p => p.id === productId);
    if (product && product.stock >= quantity) {
      product.stock -= quantity;
      return {
        data: true,
        success: true
      };
    }

    return {
      data: false,
      success: false,
      message: 'Insufficient stock'
    };
  }
}

export const apiService = new ApiService();