interface ConsunptionMethodOptionProps {
    imageUrl: string;
    iamgeAlt: string;
    buttonText: string;
}

const ConsunptionMethodOption = () => {
    return (<Card>
        <CardContent className="py-08 flex flex-col items-center gap-8">
          <div className="relative h-[80px] w-[80px]">
            <Image
              src="/Dine_in.png"
              fill
              alt="Para comer aqui"
              className="object-contain"
            ></Image>
          </div>
          <Button variant="secondary" className="rounded-full">
            Para comer aqui
          </Button>
        </CardContent>
      </Card>  );
}
 
export default ConsunptionMethodOption;