"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectPositioner,
} from "@/components/ui/select";
import { SectionContainer } from "@/components/section-container";

interface InterviewFormData {
  name: string;
  phone: string;
  residenceType: string;
  description: string;
}

const residenceTypes = [
  { value: "1room", label: "원룸/오피스텔" },
  { value: "apartment", label: "아파트" },
  { value: "house", label: "단독주택" },
  { value: "etc", label: "기타" },
];

export function Interview() {
  const [formData, setFormData] = useState<InterviewFormData>({
    name: "",
    phone: "",
    residenceType: "",
    description: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(
      "인터뷰 신청이 접수되었습니다. 휘게Zip에서 연락드리겠습니다."
    );
    setFormData({
      name: "",
      phone: "",
      residenceType: "",
      description: "",
    });
  }

  return (
    <SectionContainer id="interview" className="bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-8 italic">
          "나를 만든 공간, 내가 고른 가구"
        </h2>
        <p className="text-stone-400 mb-12 font-light text-lg">
          자신의 집과 가구에 특별한 애착이 있나요?
          <br />
          휘게Zip의 연구에 참여하여 당신의 멋진 이야기를 들려주세요.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
          <Card className="bg-transparent border-stone-800">
            <CardContent className="p-8">
              <h4 className="text-amber-500 text-xs font-bold mb-2 tracking-widest uppercase">
                Target
              </h4>
              <p className="text-sm font-light text-stone-400">
                공간을 통해 삶의 변화를 경험한 분, 가구 컬렉터, 집에 진심인 모든
                분
              </p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-stone-800">
            <CardContent className="p-8">
              <h4 className="text-amber-500 text-xs font-bold mb-2 tracking-widest uppercase">
                Benefit
              </h4>
              <p className="text-sm font-light text-stone-400">
                휘게Zip 연구 레포트, 소정의 사례비 또는 가구 컨설팅권 제공
              </p>
            </CardContent>
          </Card>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl text-stone-800"
        >
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="성함"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full"
              required
            />
            <Input
              type="tel"
              placeholder="연락처"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full"
              required
            />
            <Select
              value={formData.residenceType}
              onValueChange={(value) =>
                setFormData({ ...formData, residenceType: value ?? "" })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="거주 형태 선택" />
              </SelectTrigger>
              <SelectPositioner>
                <SelectContent>
                  {residenceTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Select>
            <Textarea
              placeholder="간단한 공간 소개"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full bg-stone-800 text-white hover:bg-stone-700"
            >
              인터뷰 신청하기
            </Button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}


