export default function TuringMachine() {
    return (
            <div class="p-4 text-white sm:p-10 md:p-20 lg:px-50 xl:px-75 2xl:px-100 flex justify-center">
                <div class="w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                    <h1 class="text-3xl md:text-5xl lg:text-6xl text-center font-bold mb-12">An Introduction to Turing-Machines</h1>
                    <div class="flex flex-col lg:flex-row items-center mx-auto">
                    <div class="flex-1">
                        <h2 class="text-xl lg:text-2xl font-bold">
                        Preface
                        </h2>
                        <p class="text-base lg:text-lg">
                        In 1936, the British mathematician Alan Turing came up with an idea
                        that would not only revolutionize the understanding of mathematical 
                        computability, but also mark a decisive turning point in the history of 
                        computer technology. This idea, the Turing machine, was Turing's answer to 
                        the Hilbert program - a challenge formulated by the German mathematician David 
                        Hilbert in the 1920s. The program aimed to prove all mathematical statements 
                        completely and without contradiction using a fixed system of axioms and rules, 
                        with the aim of strengthening the foundations of mathematics.
                        </p>
                    </div>
                    <div class="mt-8 lg:mt-0 lg:flex-shrink-0 xl:p-10">
                        <img src="resources/Turing_Machine.jpg" alt="Turing Machine" class="max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-md" />
                        <figcaption class="text-sm font-extralight">Picture 1: A Turing-Machine</figcaption>
                    </div>
                </div>

                <div>
                    <h2 class="text-xl pt-10 lg:text-2xl font-bold">
                        The Basics of the Turing Machine
                    </h2>
                    <p class="text-base lg:text-lg">
                    Alan Turing envisioned a machine in his groundbreaking paper, known today as the 
                    Turing Machine. This concept was based on the idea of a person in a box, equipped 
                    with a pencil and a stack of paper, along with a book full of instructions. 
                    Turing's central insight was to define and control behavior through symbols 
                    rather than relying on physical mechanisms.
                    </p>

                    <h3>
                        Ok, but how does a Turing Machine work?
                    </h3>
                    <p class="text-base lg:text-lg">
                        Turing's concept proposed that the behavior of the machine (or the person in 
                        the box) is determined by the instructions in the book. Each page of the book 
                        corresponds to a decision, based on a conditional statement ("If-Then"). The 
                        person in the box perceives a symbol (the "If" part), which is determined by the 
                        position of their pencil on the paper. This symbol is compared to a list of 
                        possible symbols listed in the instructions to find a match. Once a match is found, 
                        the operation step (the "Then" part) follows, where new symbols are written down or 
                        attention is directed to a new spot. The instructions thus determine the actions and 
                        the next state of the machine.
                    </p>

                    <h3>
                        The Decision Problem and the Turing Machine
                    </h3>
                    <p class="text-base lg:text-lg">
                        A central aspect of Turing's work was addressing the Entscheidungsproblem (
                        decision problem), which asks whether there is a general procedure that can 
                        decide whether any mathematical statement is true or false. Turing demonstrated that his 
                        machine could, in principle, solve any computable problem, but by illustrating the 
                        halting problem, he also proved that there are fundamentally undecidable problems 
                        - a direct contradiction to the goal of the Hilbert program.      
                    </p>

                    <h3>
                        The "Real" Hardware of the Original Turing Machine
                    </h3>
                    <p class="text-base lg:text-lg">
                        Although Turing presented his machine as a purely abstract concept, the 
                        "hardware" of such a machine can be imagined as an infinitely long tape on 
                        which symbols are stored. A read/write head moves along this tape, reads symbols, 
                        writes new symbols based on the rules of the "instruction book," and changes 
                        its state accordingly. This simplicity and flexibility made the Turing Machine a 
                        powerful model for theoretical computer science, far beyond the mechanical limitations 
                        of real machines.
                    </p>
                    <p>
                    Turing used this simple yet powerful analogy to lay the foundations for modern 
                    computation and programming. The way a Turing Machine operates resembles flipping 
                    through a book, where each page enables a new decision based on where the "pencil" 
                    currently points. This is not a linear process but rather a "choose your own adventure", 
                    where the order of states traversed depends on the input. Ultimately, the machine can 
                    reach an end state where it provides a solution to the given problem and stops to output 
                    the result.
                    </p>
                </div>
            </div>
        </div>
    );
}
