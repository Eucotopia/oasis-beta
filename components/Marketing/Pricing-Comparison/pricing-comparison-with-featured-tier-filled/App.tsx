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

  const beforeColumnBg =
    "before:absolute before:h-full before:inset-0 before:bg-primary before:-z-10 ";

  const mostPopularBeforeColumnBg = cn(beforeColumnBg, "before:bg-primary");
  const featuredBeforeColumnBg = cn(beforeColumnBg, "before:bg-default-900");

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

      {/* Grid ---> "xs" to "lg" */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        {tiers.map((tier) => (
          <Card
            key={tier.key}
            className={cn("relative p-3", {
              "border-2 border-primary": tier.mostPopular,
              "!border-medium border-divider bg-transparent": !tier.mostPopular,
              "bg-default-900 text-default-50": tier.featured,
            })}
            shadow="none"
          >
            {tier.mostPopular ? (
              <Chip
                classNames={{
                  base: "absolute top-4 right-4",
                }}
                color="primary"
                variant="flat"
              >
                Most Popular
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p
                className={cn("text-medium text-default-500", {
                  "text-default-400": tier.featured,
                })}
              >
                {tier.description}
              </p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span
                  className={cn(
                    "inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent",
                    {
                      "text-background": tier.featured,
                    },
                  )}
                >
                  {typeof tier.price === "string" ? tier.price : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span
                    className={cn("text-sm font-medium text-default-400", {
                      "text-default-300": tier.featured,
                    })}
                  >
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
                    <p
                      className={cn("text-default-500", {
                        "text-default-400": tier.featured,
                      })}
                    >
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                className={cn({
                  "bg-default-50": tier.featured,
                })}
                color={tier.buttonColor}
                href={tier.href}
                variant="flat"
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Table ---> lg */}
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
                  <th
                    key={tier.key}
                    className={cn("relative px-6 pt-6 xl:px-8 xl:pt-8", {
                      [`${mostPopularBeforeColumnBg} before:rounded-t-medium`]: tier.mostPopular,
                      [`${featuredBeforeColumnBg} before:rounded-t-medium`]: tier.featured,
                    })}
                    scope="col"
                  >
                    {tier.mostPopular ? (
                      <Chip
                        classNames={{
                          base: "absolute top-2 right-2 bg-primary-foreground shadow-large border-medium border-primary",
                          content: "font-medium text-primary",
                        }}
                        color="primary"
                      >
                        Most Popular
                      </Chip>
                    ) : null}
                    <div
                      className={cn("relative text-large font-medium text-foreground", {
                        "text-primary-foreground": tier.mostPopular,
                        "text-default-50": tier.featured,
                      })}
                    >
                      {tier.title}
                    </div>
                  </th>
                ))}
              </tr>
              <tr>
                <th scope="row">
                  <span className="sr-only">Price</span>
                </th>
                {tiers.map((tier) => (
                  <td
                    key={tier.key}
                    className={cn("relative px-6 pt-4 xl:px-8", {
                      [`${mostPopularBeforeColumnBg}`]: tier.mostPopular,
                      [`${featuredBeforeColumnBg}`]: tier.featured,
                    })}
                  >
                    <div className="flex items-baseline gap-1 text-foreground">
                      <span
                        className={cn(
                          "inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-8 tracking-tight text-transparent",
                          {
                            "text-primary-foreground": tier.mostPopular,
                            "text-default-50": tier.featured,
                          },
                        )}
                      >
                        {typeof tier.price === "string"
                          ? tier.price
                          : tier.price[selectedFrequency.key]}
                      </span>
                      <span
                        className={cn("!text-small font-medium text-default-600", {
                          "text-primary-foreground/50": tier.mostPopular,
                          "text-default-300": tier.featured,
                        })}
                      >
                        {tier.priceSuffix
                          ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                          : `/${selectedFrequency.priceSuffix}`}
                      </span>
                    </div>
                    <Button
                      fullWidth
                      as={Link}
                      className={cn("mt-6", {
                        "bg-primary-foreground font-medium text-primary shadow-sm shadow-default-500/50":
                          tier.mostPopular,
                        "bg-default-50": tier.featured,
                      })}
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
                      colSpan={1}
                      scope="colgroup"
                    >
                      {feat.title}
                      <Divider className="absolute -inset-x-4 mt-2 bg-default-600/10" />
                    </th>
                    {tiers.map((tier) => (
                      <td
                        key={tier.key}
                        className={cn("relative py-4", {
                          [`${mostPopularBeforeColumnBg}`]: tier.mostPopular,
                          [`${featuredBeforeColumnBg}`]: tier.featured,
                        })}
                      />
                    ))}
                  </tr>
                  {feat.items.map((tierFeature, tierFeatureIndex) => (
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

                      {tiers.map((tier) => {
                        const isLastOne =
                          tierFeatureIndex === feat.items.length - 1 &&
                          featIndex === features.length - 1;

                        return (
                          <td
                            key={tier.key}
                            className={cn("relative px-6 py-4 xl:px-8", {
                              [`${mostPopularBeforeColumnBg} ${
                                isLastOne ? "before:rounded-b-medium" : ""
                              }`]: tier.mostPopular,
                              [`${featuredBeforeColumnBg} ${
                                isLastOne ? "before:rounded-b-medium" : ""
                              }`]: tier.featured,
                            })}
                          >
                            {typeof tierFeature.tiers[tier.key] === "string" ? (
                              <div
                                className={cn("text-center text-medium text-default-500", {
                                  "text-primary-foreground/70": tier.mostPopular,
                                  "text-default-400": tier.featured,
                                })}
                              >
                                {tierFeature.tiers[tier.key]}
                              </div>
                            ) : (
                              <>
                                {tierFeature.tiers[tier.key] === true ? (
                                  <Icon
                                    className={cn("mx-auto text-primary", {
                                      "text-primary-foreground": tier.mostPopular,
                                    })}
                                    icon="ci:check"
                                    width={24}
                                  />
                                ) : (
                                  <Icon
                                    className={cn("mx-auto text-default-400", {
                                      "text-primary-foreground/50": tier.mostPopular,
                                      "text-default-400/50": tier.featured,
                                    })}
                                    icon="ci:close-sm"
                                    width={24}
                                  />
                                )}

                                <span className="sr-only">
                                  {tierFeature.tiers[tier.key] === true
                                    ? "Included"
                                    : "Not included"}
                                  &nbsp;in&nbsp;{tier.title}
                                </span>
                              </>
                            )}
                          </td>
                        );
                      })}
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
