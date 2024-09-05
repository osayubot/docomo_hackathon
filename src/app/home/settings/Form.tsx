import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

// Gender enumの定義
const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
  OTHER: "OTHER",
};

function MultiForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    year: "",
    month: "",
    day: "",
    gender: "",
    age: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // 入力内容をチェックしてフォームが有効かどうかを判断する
  useEffect(() => {
    const { name, email, year, month, day, gender, age } = formData;
    if (name && email && year && month && day && gender && age) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  

  const handleGenderChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, gender: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`名前: ${formData.name}, パスワード:${formData.password},メール: ${formData.email}, 性別: ${formData.gender}, 年齢: ${formData.age}, 生年月日: ${formData.year}-${formData.month}-${formData.day}`);
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

  const generateDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  const generateAges = () => {
    const ages = [];
    for (let i = 18; i <= 100; i++) {
      ages.push(i);
    }
    return ages;
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        {/* 名前入力 */}
        <FormControl>
          <FormLabel>名前</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="名前を入力"
          />
        </FormControl>

        {/* パスワード入力 */}
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="パスワードを入力"
          />
        </FormControl>
        {/* メール入力 */}
        <FormControl>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="メールアドレスを入力"
          />
        </FormControl>

        {/* 性別選択 (enum Genderを使用) */}
        <FormControl>
          <FormLabel>性別</FormLabel>
          <RadioGroup onChange={handleGenderChange} value={formData.gender}>
            <HStack spacing={4}>
              <Radio value={Gender.MALE}>男性</Radio>
              <Radio value={Gender.FEMALE}>女性</Radio>
              <Radio value={Gender.OTHER}>その他</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        {/* 年齢選択 */}
        <FormControl>
          <FormLabel>年齢</FormLabel>
          <Select
            name="age"
            placeholder="年齢を選択"
            value={formData.age}
            onChange={handleInputChange}
          >
            {generateAges().map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </Select>
        </FormControl>

        {/* 生年月日選択 */}
        <FormControl>
          <FormLabel>生年月日</FormLabel>
          <HStack spacing={2}>
            <Select
              name="year"
              placeholder="年"
              value={formData.year}
              onChange={handleInputChange}
            >
              {generateYears().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
            <Select
              name="month"
              placeholder="月"
              value={formData.month}
              onChange={handleInputChange}
            >
              {Array.from(Array(12).keys()).map((month) => (
                <option key={month + 1} value={month + 1}>
                  {month + 1}
                </option>
              ))}
            </Select>
            <Select
              name="day"
              placeholder="日"
              value={formData.day}
              onChange={handleInputChange}
            >
              {generateDays().map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </Select>
          </HStack>
        </FormControl>

        {/* 送信ボタン */}
        <Button type="submit" colorScheme="teal" isDisabled={!isFormValid}>
          送信

        </Button>
      </VStack>
    </form>
  );
}

export default MultiForm;
