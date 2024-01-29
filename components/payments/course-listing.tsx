"use client";

import * as React from "react";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/data-display/Card";
import { Icons } from "@/components/icons";
import { CheckOutForm } from "@/components/payments/check-out-form";

export const CourseListing = () => {
  const getCourses = useQuery(api.course.details.listCourses);

  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
      {getCourses?.map((course) => (
        <Card key={course._id}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{course.name}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex h-[180px] flex-col justify-between rounded-md">
              <Icons.stripe className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">--Stripe Product Id--</h3>
                <p className="text-fgsubtle text-sm">
                  Provide your details and pay
                </p>
              </div>
            </div>
            <CheckOutForm courseid={course._id} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
