// Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.

// IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;

// Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.

// IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).

// However, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

// Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

// Note: You may assume there is no extra space or special characters in the input string.

// SOLUTION 1:

// inRange :: (Number, Number) -> Number -> Boolean
const inRange = (from, to) => n => from <= n && n <= to;

// containsOnlyDigits :: String -> Boolean
const containsOnlyDigits = str => (/^[0-9]+$/).test(str);

// hasLeadinZero :: String -> Boolean
const hasLeadingZero = str => str[0] === '0' && str.length > 1;

// isHex :: String -> Boolean
const isHex = str => {
    const A = parseInt(str.toLowerCase(), 16).toString(16).padStart(4, 0);
    const B = str.toLowerCase().padStart(4, 0);
    return A === B;
};

const IPv4 = 'IPv4', IPv6 = 'IPv6', NEITHER = 'Neither';

// validIPAddress :: String -> Boolean
const validIPAddress = ip => {
    if(ip.includes('.')) {
        const groups = ip.split('.');
        if(groups.length !== 4) return NEITHER;

        for(let group of groups) {
            if(!inRange(1, 3)(group.length)) return NEITHER;
            if(!containsOnlyDigits(group)) return NEITHER;
            if(!inRange(0, 255)(Number(group))) return NEITHER;
            if(hasLeadingZero(group)) return NEITHER;
        }

        return IPv4;
    } else if(ip.includes(':')) {
        const groups = ip.split(':');
        if(groups.length !== 8) return NEITHER;

        for(let group of groups) {
            if(!inRange(1, 4)(group.length)) return NEITHER;
            if(!isHex(group)) return NEITHER;
        }

        return IPv6;
    }

    return NEITHER;
};
