// cards.js
const cardSecrets = [
    'test',
    'card密钥2',
    'card密钥3',
    // ... 更多卡密
];
/**
 * 验证卡密是否有效
 * @param {string} cardKey 用户输入的卡密
 * @returns {boolean} 卡密是否有效
 */
export function validateCardKey(cardKey) {
    // 将用户输入的卡密与存储的卡密列表进行对比
    return cardSecrets.includes(cardKey);
}

// 示例使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports.validateCardKey = validateCardKey; // 用于Node.js或支持模块导入的环境
} else {
    window.validateCardKey = validateCardKey; // 直接暴露在全局对象（window）上，便于在HTML中直接调用
