import { Fragment, useId } from "react"
import { StepProps } from "@/types/steps.type";
import Typography from "@/components/ui/typography";
import { FaCheck, FaChevronRight } from "react-icons/fa6";
import useWindowSize from "@/hooks/useWindowSize";

interface StepsProps {
    steps: StepProps[];
    currentStep: number;
}

const Step: React.FC<StepsProps> = ({ steps, currentStep }) => {
    const stepId = useId();
    const { isMobile } = useWindowSize();

    console.log('isMobile', isMobile);

    return (
        <div className={`w-full flex items-center ${isMobile ? 'justify-center' : 'justify-end'}`}>
            {isMobile ? (
                <Typography variant="h4" className="text-center">
                    {`Etapa ${currentStep + 1} de ${steps.length}`}
                </Typography>
            ) : (
                <>
                
                {steps.map((step, index) => (
                    <Fragment key={`${stepId}-${index}`}>
                        <div
                            className={`flex justify-center mr-2 items-center w-7 h-7 rounded-full border-2 border-green-light text-green-light
                                ${step.isDone && "bg-green-light text-white"}`}
                        >
                            {step.isDone ? <FaCheck color="var(--white)" /> :  index + 1}
                        </div>
                        <Typography color="text-green-light" variant="span" >
                            {step.title}
                        </Typography>
    
                        {index < steps.length - 1 && (
                            <div className="mx-8">
                                <FaChevronRight color="var(--green-light)" />
                            </div>
                        )}
    
                    </Fragment>
                ))}
                </>
            ) }
        </div>
    );
};

export default Step;