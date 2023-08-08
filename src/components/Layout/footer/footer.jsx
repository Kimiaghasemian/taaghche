import { Divider } from "antd";
import React from "react";

export default function LayoutFooter() {
  return (
    <div>
      <Divider />
      <p style={{ fontSize: "10px", fontWeight: "40", color: "grey" }}>
        © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی کتاب طاقچه است.
      </p>
      <div style={{ fontSize: "14px", fontWeight: "40" }}>
        <a href="https://publisher.taaghche.com/login"> ورود ناشران </a>
        <span>|</span>
        <a href="https://taaghche.com/termsAndConditions"> شرایط استفاده </a>
        <span>|</span>
        <a href="https://kb.taaghche.com/knowledge-base/"> سوالات متداول </a>
        <span>|</span>
        <a href="https://taaghche.com/contactus"> ارتباط با پشتیبانی </a>
      </div>
    </div>
  );
}
