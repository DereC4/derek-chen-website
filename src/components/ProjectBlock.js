import Image from 'next/image';
import placeholder from '../../assets/gradedistimage.png';

const ProjectBlock = (props) => {
    return (
        <>
            <div className="project-block max-w-sm md:max-w-md lg:max-w-lg">
                {/* Text with image and description */}
                <div className="flex flex-col justify-between self-start gap-1">
                    <h1 className="flex items-center text-base text-left font-bold mx-3 mt-1">
                        {props.title}
                    </h1>
                    <Image src={placeholder} alt="Placeholder Image" />
                    <h2 className="text-xs mx-3">
                        {props.description}
                    </h2>
                </div>
            </div>
        </>
    );
}

export default ProjectBlock;