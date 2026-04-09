from typing import List


def groupAnagrams(strs: List[str]) -> List[List[str]]:
    """
    字母异位词分组

    使用字符频次数组作为 key，将异位词分组。
    时间复杂度: O(n*k)，其中 n 是字符串数量，k 是平均字符串长度
    空间复杂度: O(n*k)
    """
    char_map = {}

    for s in strs:
        # 统计字符频次
        freq = [0] * 26
        for char in s:
            freq[ord(char) - ord('a')] += 1

        # 用频次数组作为 key
        key = tuple(freq)

        if key not in char_map:
            char_map[key] = []
        char_map[key].append(s)

    return list(char_map.values())


if __name__ == "__main__":
    # 测试
    result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    print(result)
