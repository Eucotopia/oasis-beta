"use client";

import React from "react";
import {Icon} from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";

import {FrequencyEnum} from "./pricing-types";
import {frequencies, tiers} from "./pricing-tiers";
import features from "./pricing-tiers-features";
import {cn} from "./cn";

export default function Component() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0]);

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);

    setSelectedFrequency(frequencies[frequencyIndex]);
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center py-24">
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="font-medium leading-7 text-primary">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">Compare plans & features.</h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Discover the ideal plan, beginning at under $2 per week.
        </h2>
      </div>
      <Spacer y={8} />

      <Tabs
        classNames={{
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="full"
        size="lg"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.Yearly}
          aria-label="Pay Yearly"
          className="pr-1.5"
          title={
            <div className="flex items-center gap-2">
              <p>Pay Yearly</p>
              <Chip color="primary">Save 25%</Chip>
            </div>
          }
        />
        <Tab key={FrequencyEnum.Quarterly} title="Pay Quarterly" />
      </Tabs>

      <Spacer y={12} />

      {/* from "xs" to "lg" */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        {tiers.map((tier) => (
          <Card key={tier.key} className="p-3" shadow="md">
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-xl font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
                  {typeof tier.price === "string" ? tier.price : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-small font-medium text-default-400">
                    {tier.priceSuffix
                      ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                      : `/${selectedFrequency.priceSuffix}`}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon className="text-primary" icon="ci:check" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color={tier.buttonColor}
                href={tier.href}
                variant={tier.buttonVariant}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* > lg */}
      <div className="isolate hidden lg:block">
        <div className="relative -mx-8">
          <table className="w-full table-fixed border-separate border-spacing-x-4 text-left">
            <caption className="sr-only">Pricing plan comparison</caption>
            <colgroup>
              {Array.from({length: tiers.length + 1}).map((_, index) => (
                <col key={index} className="w-1/4" />
              ))}
            </colgroup>
            <thead>
              <tr>
                <td />
                {tiers.map((tier) => (
                  <th key={tier.key} className="px-6 pt-6 xl:px-8 xl:pt-8" scope="col">
                    <div className="text-large font-medium">{tier.title}</div>
                  </th>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <span className="sr-only">Price</span>
                </th>
                {tiers.map((tier) => (
                  <td key={tier.key} className="px-6 pt-4 xl:px-8">
                    <div className="flex items-baseline gap-1 text-foreground">
                      <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-8 tracking-tight text-transparent">
                        {typeof tier.price === "string"
                          ? tier.price
                          : tier.price[selectedFrequency.key]}
                      </span>
                      <span className="text-small font-medium text-default-600">
                        {tier.priceSuffix
                          ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                          : `/${selectedFrequency.priceSuffix}`}
                      </span>
                    </div>
                    <Button
                      fullWidth
                      as={Link}
                      className="mt-6"
                      color={tier.buttonColor}
                      href={tier.href}
                      variant={tier.buttonVariant}
                    >
                      {tier.buttonText}
                    </Button>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, featIndex) => (
                <React.Fragment key={feat.title}>
                  <tr>
                    <th
                      className={cn("pb-4 pt-12 text-large font-semibold text-foreground", {
                        "pt-16": featIndex === 0,
                      })}
                      colSpan={4}
                      scope="colgroup"
                    >
                      {feat.title}
                      <Divider className="absolute -inset-x-4 mt-2 bg-default-600/10" />
                    </th>
                  </tr>
                  {feat.items.map((tierFeature) => (
                    <tr key={tierFeature.title}>
                      <th className="py-4 text-medium font-normal text-default-700" scope="row">
                        {tierFeature.helpText ? (
                          <div className="flex items-center gap-1">
                            <span>{tierFeature.title}</span>
                            <Tooltip
                              className="max-w-[240px]"
                              color="foreground"
                              content={tierFeature.helpText}
                              placement="right"
                            >
                              <Icon
                                className="text-default-600"
                                icon="solar:info-circle-line-duotone"
                                width={20}
                              />
                            </Tooltip>
                          </div>
                        ) : (
                          tierFeature.title
                        )}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.key} className="px-6 py-4 xl:px-8">
                          {typeof tierFeature.tiers[tier.key] === "string" ? (
                            <div className="text-center text-medium text-default-500">
                              {tierFeature.tiers[tier.key]}
                            </div>
                          ) : (
                            <>
                              {tierFeature.tiers[tier.key] === true ? (
                                <Icon className="mx-auto text-primary" icon="ci:check" width={24} />
                              ) : (
                                <Icon
                                  className="mx-auto text-default-400"
                                  icon="ci:close-sm"
                                  width={24}
                                />
                              )}

                              <span className="sr-only">
                                {tierFeature.tiers[tier.key] === true ? "Included" : "Not included"}
                                &nbsp;in&nbsp;{tier.title}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400">
          Are you an open source developer?&nbsp;
          <Link color="foreground" href="#" underline="always">
            Get a discount
          </Link>
        </p>
      </div>
    </div>
  );
}
