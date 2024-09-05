import { useState } from "react";
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

function MultiForm() {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    month: "",
    day: "",
    sex: "",
    age: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenderChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, gender: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`名前: ${formData.name},  性別: ${formData.sex}, 年齢: ${formData.age}, 生年月日: ${formData.year}-${formData.month}-${formData.day}`);
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
    for (let i = 0; i <= 100; i++) {
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


        {/* 性別選択 */}
        <FormControl>
          <FormLabel>性別</FormLabel>
          <RadioGroup onChange={handleGenderChange} value={formData.sex}>
            <HStack spacing={4}>
              <Radio value="男性">男性</Radio>
              <Radio value="女性">女性</Radio>
              <Radio value="その他">その他</Radio>
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
        <Button type="submit" colorScheme="teal">
          送信
        </Button>
      </VStack>
    </form>
  );
}

export default MultiForm;
