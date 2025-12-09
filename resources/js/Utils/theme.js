import { palette, updatePrimaryPalette, updateSurfacePalette } from '@primeuix/themes';

export const applyUserTheme = (manColor, secondaryColor) => {
    // 1. Tạo bảng màu (Palette) từ màu gốc hexColor bằng hàm có sẵn của thư viện
    const manShades = palette(manColor);
    const secondaryShades = palette(secondaryColor);

    // 2. Sử dụng updatePrimaryPalette để ghi đè màu chủ đạo
    // Hàm này sẽ tự động cập nhật các variable --p-primary-*
    updatePrimaryPalette(manShades);
    updateSurfacePalette(secondaryShades);


    const root = document.documentElement;
    Object.keys(manShades).forEach((key) => {
        root.style.setProperty(`--p-primary-${key}`, manShades[key]);
    });
    Object.keys(secondaryShades).forEach((key) => {
        root.style.setProperty(`--p-secondary-${key}`, secondaryShades[key]);
    });
};
